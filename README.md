 # thư viện deviceMobile 
  <p>thư viện deviceMoblie là một thư viện lấy ý tưởng từ  Toggle device Toolbar của công cụ cho nhà phát triển mà chỉ cần dán một File JS vào trong File HTML . 
 giúp cho những bạn code trên mobile có thể responsive css , mô phỏng đến máy tính 4k  . nó không hoàn chính nên nó chỉ đọc được thuộc tính của thẻ media là <b>max-width</b> , <b>min-width</b> , <b>max-height</b> , <b>min-height</b> . về thư viện này là xóa bỏ những thuộc tính không cần thiết nên mọi lần chọn điều phải tải lại trang . vì tôi xóa hết thuộc tính rồi .</p>

 # File JS : 
 <pre>
   <code>
      <span><<span>script src="http://devicemobile.wap.sh/indexjs"><span><<span>script<span>><span>
   </code>
  </pre>

 # Hướng dẫn sử dụng 
 bạn dán File JS ở dưới vào File HTML của bạn . Nhưng File Css nào có dùng thẻ media của responsive thì bạn hãy thêm Attribute vào thẻ link là title="@media" 
 # ví dụ 1 :
  <pre>
   <code>
      <span><<span>link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-EVSTQN3azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"crossorigin="anonymous"<span>><span>
   </code>
  </pre>

# ví dụ 1 : Trong thẻ có @media . kết quả phải viết như này
  <pre>
   <code>
   <span><<span>link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"rel="stylesheet"integrity="sha384-EVSTQN3azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"crossorigin="anonymous" title="@media"<span>><span>
   </code>
  </pre>

# ví dụ 2 : 
<pre>
   <code>
       <span><<span>link rel="stylesheet" href="index.css"<span>><span>
   </code>
  </pre>

# ví dụ 2 : Trong thẻ có @media . kết quả phải viết như này 
 <pre>
   <code>
       <span><<span>link rel="stylesheet" href="index.css" title="@media"<span>><span>
   </code>
  </pre>

# Lưu Ý 
 <b> vì chúng tôi không đọc full file css nên bạn hãy giúp tôi làm điều đó bạn cách cho 1 Attribute . và để chúng tôi đọc được thẻ media trong File css .. </b>

# Liên hệ để sữa lỗi - Facebook !
  <a href="https://www.facebook.com/dangphuchoahcm/">Bấm vào đây để liên hệ</a>

# Binh luận bài viết - Facebook !
<a href="https://www.facebook.com/dangphuchoahcm/">Bấm vào đây để đến bài viết</a>

# Hướng dẫn Video qua youtube
 <p>Đang quay ...</p>


 
