// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

<div className="container">
<div className="text">Responsive Contact us Form</div>
<form action="#">
   <div className="form-row">
      <div className="input-data">
         <input type="text" required>
         <div className="underline"></div>
         <label for="">First Name</label>
      </div>
      <div className="input-data">
         <input type="text" required>
         <div className="underline"></div>
         <label for="">Last Name</label>
      </div>
   </div>
   <div className="form-row">
      <div className="input-data">
         <input type="text" required>
         <div className="underline"></div>
         <label for="">Email Address</label>
      </div>
      <div className="input-data">
         <input type="text" required>
         <div className="underline"></div>
         <label for="">Website Name</label>
      </div>
   </div>
   <div className="form-row">
      <div className="input-data textarea">
         <textarea rows="8" cols="80" required></textarea>
         <br />
         <div className="underline"></div>
         <label for="">Write your message</label>
         <br />
         <div className="form-row submit-btn">
            <div className="input-data">
               <div className="inner"></div>
               <input type="submit" value="submit">
            </div>
         </div>
      </div>
   </div>
</form>
</div>