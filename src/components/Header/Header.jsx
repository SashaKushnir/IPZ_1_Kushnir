import React from 'react'
import HeaderClass from './Header.module.css'
const Header = () => {
    return(
    <header className={HeaderClass.header}>
    <img src="https://www.logaster.ru/blog/wp-content/uploads/2018/02/type-of-logo-symbol-min.png" />
    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGeUiDFbjvaU79CNBJtCleSipk8tuAaIEtQ&usqp=CAU" />
      */}
    </header>
    )
}

export default Header