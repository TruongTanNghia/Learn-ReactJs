import { useRef, useState } from 'react';

const Bai6UseRef = () => {
  const paragraphStyles = {
    WebkitLineClamp: 3,
    webkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  };
  const paragrapRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleRead = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <>
      <p ref={paragrapRef} style={isOpen ? null : paragraphStyles}>
        WebkitLineClamp: Đây là một thuộc tính không chuẩn của CSS, được sử dụng để giới hạn số dòng
        của văn bản được hiển thị. Trong trường hợp này, WebkitLineClamp được thiết lập thành 3,
        nghĩa là nội dung chỉ hiển thị tối đa 3 dòng. Khi nội dung vượt quá 3 dòng, các dòng vượt
        quá sẽ bị ẩn đi và hiển thị một biểu tượng ... ở cuối. webkitBoxOrient: Thuộc tính này được
        sử dụng để xác định hướng hiển thị của phần tử. Trong trường hợp này, webkitBoxOrient được
        đặt thành vertical, nghĩa là phần tử sẽ hiển thị dọc theo trục dọc. overflow: Thuộc tính này
        quy định cách xử lý nội dung khi nó vượt quá kích thước của phần tử. Trong trường hợp này,
        nó được đặt thành hidden , nghĩa là bất kỳ nội dung vượt quá khung của phần tử sẽ bị ẩn đi.
        display: Thuộc tính này quy định kiểu hiển thị của phần tử. Trong trường hợp này, display
        được đặt thành -webkit-box, cho phép sử dụng WebkitLineClamp để giới hạn số dòng hiển thị.{' '}
      </p>
      <button onClick={handleRead}> {isOpen ? 'Read less' : 'Read more'} </button>
    </>
  );
};

export default Bai6UseRef;
