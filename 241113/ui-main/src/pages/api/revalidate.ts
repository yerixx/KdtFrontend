import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch (err) {
    console.error(err);
    //서버 대응 불가 500
    res.status(500).send("Revailidation Failed");
  }
};

export default handler;
