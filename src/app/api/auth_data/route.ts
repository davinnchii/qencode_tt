import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { AuthDataType } from '@/utils/AuthDataType';

let authData = {
  email: '',
};

export async function GET(req: Request, res: NextApiResponse) {
  if (authData.email) {
    console.log(authData)
    res.statusCode = 200;
    return NextResponse.json(authData);
  }

  res.statusCode = 400;
  return NextResponse.json({ message: 'Firstly enter your email' });
}

export async function POST(req: Request, res: NextApiResponse) {
  authData.email = '';
  const data = await req.json();
  authData.email = data.email;

  res.statusCode = 204;
  return NextResponse.json(authData);
}