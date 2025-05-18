import * as jose from 'jose'

// Define the JWT payload type
type JWTPayload = {
  userId?: string;
  email?: string;
  role?: string;
  [key: string]: string | number | boolean | undefined;
}

// Create a secret key from environment variable
const getSecret = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set')
  }
  return new TextEncoder().encode(secret)
}

// Sign a JWT token
export async function signJWT(payload: JWTPayload, expiresIn: string = '24h') {
  const secret = getSecret()
  
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret)
}

// Verify a JWT token
export async function verifyJWT(token: string): Promise<JWTPayload> {
  const secret = getSecret()
  
  try {
    const { payload } = await jose.jwtVerify(token, secret)
    return payload as JWTPayload
  } catch (err) {
    throw new Error('Invalid token')
  }
}

// Decode a JWT token without verification
export function decodeJWT(token: string): JWTPayload {
  return jose.decodeJwt(token) as JWTPayload
} 