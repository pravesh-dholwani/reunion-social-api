# reunion-social-api

# CREATED
/user/authenticate ---> authentication <br />
TO AUTHENTICATE JUST INCLUDE email:<email id> AND password:<password> IN BODY
  <br/>
You can select any email_id and password from the data given below in database section.
  <br/>
<br />
/follow/:id ---> follow  <br />
/unfollow/:id ---> unfollow  <br />
<br />
/posts/delete/:id -->delete post<br />
/posts/add -->add the post<br />
/posts/get/:id -->get the post with post_id=id<br />
/posts/all -->give all posts<br />
<br />
/comment/:id --> add a comment<br />
/like/:id -->like a post<br />
/unlike/:id --> unlike a post<br />

# Database Tables

Posts(post_id,title,description,c_time)
<br/>
Credentials(email,password)
<br/>
data:
email                         Password
<br/>
pravesh dholwani5@gmail.com   abcdefg 
<br/>
dholwani5                     dholwani
<br/>
Users(email,user_name)
<br/>
Likes(post_id,user_id)
<br/>
Comments(c_id,comment,post_id,user_id)


