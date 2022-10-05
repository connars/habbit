// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import habitApi from '../../server/habit.api';

type Data = {
  name: string, 
  y: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const t = await habitApi.get({user_fk: 1});
  res.status(200).json({ name: 'John Doe', y: t })
}
