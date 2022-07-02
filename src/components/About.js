import React from 'react'
import profile from '../assets/profile21.jpg'
export default function About() {
  return (
    <div id='abouts'>
        <h2 className="heading">Know About us</h2>
        <div className="flexhero">
    <div className="image">
        <img id= 'img' src={profile} alt=""  height={500}/>
        <center><h2 className="name">Er. Yash Farkya</h2>
        <h3>Founder Chairman</h3></center>
    </div>
    <div className="text">
   <p className="para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cum quia. Aut facere doloremque consequuntur adipisci illo quae quo earum beatae modi? Ducimus modi a molestiae repellat eligendi distinctio nihil sapiente. Omnis voluptatum tenetur ex error dicta nisi placeat, illum officia, deleniti atque exercitationem aspernatur. Ut sapiente ducimus eos laboriosam animi molestias vel voluptate accusamus magni in optio accusantium, odio harum consectetur possimus quod suscipit deleniti? Rem pariatur fugiat iusto culpa. Quo asperiores, quaerat veritatis similique non praesentium doloremque nemo.
   </p>
   <div className="link">
   <a href="/" id='serv'>Services</a>
   </div>
    </div>
</div>
    </div>
  )
}
