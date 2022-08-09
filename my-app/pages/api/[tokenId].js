// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  const tokenId = req.query.tokenId;
 // res.status(200).json({ tokenId: tokenId })
 const name = `Crypto Fighter #${tokenId}`;
 const description = "Crypto Fighters NFT Collection"
 const image = 'http://url/${Number(tokenId)-1}.png'

 return res.json({
  name:name,
  description:description,
  image:image
 });
}
