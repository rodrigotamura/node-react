import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // if token is empty
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // taking off the word 'Bearer'
  const [, token] = authHeader.split(' ');

  try {
    // the command bellow will return informations of user
    // based on token decoded. Remember that, when the user logged in
    // the payload of generated token was ID.
    // the follow decoded object has ID and the expiration date (UNIX timestamp).
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id; // we will send this ID into called controller

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
