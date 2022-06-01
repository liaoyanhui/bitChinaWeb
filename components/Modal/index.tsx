/*
 * @Description: 自定义弹窗
 * @Author: 尚夏
 * @Date: 2021-06-24 15:46:51
 * @LastEditTime: 2021-06-25 16:17:26
 * @FilePath: /bit-china/components/Modal/index.tsx
 */

import * as React from "react";
import ReactDOM from "react-dom";
import Protal from "../Portal";

interface ModalProps {
  message?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  type: any;
}

// export default function Modal(props: ModalProps) {
//     const { isOpen, onClose, message } = props;
//     if (!isOpen) return null;
//     return ReactDOM.createPortal(
//         <div className="modal">
//             <span className="message">{message}</span>
//             <button onClick={onClose}>Close</button>
//         </div>,
//         document.body
//     );
// }

export default function Modal(props: ModalProps) {
  const { children, type } = props;
  return (
    <Protal selector="#modal">
      <div>{children}</div>
    </Protal>
  );
}
{
  /* <ClientOnlyPortal selector="#modal">
<div className={cn({
    [styles.tip]: true,
    [styles.success_bg]: type === 'success',
    [styles.error_bg]: type === 'error'
})}>
    <div
        className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error'
        })}
    >
        {children}
    </div>
</div>
</ClientOnlyPortal > */
}
