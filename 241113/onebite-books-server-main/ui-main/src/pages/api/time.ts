import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = new Date();
  res.status(200).json({
    time: data.toLocaleString(),
  });
};

export default handler;
