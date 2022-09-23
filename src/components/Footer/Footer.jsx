import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <Logo/>
        <div className="footerItem">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="37.8182" height="37.8182" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_209_708" transform="scale(0.0104167)"/>
                    </pattern>
                    <image id="image0_209_708" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAIBklEQVR4nO2df6wVxRXHPwd4+AsoIhbEahutWsBYAmiipipY0doQbUQb0Zg2LVGJlT/pH8S2aaP2R/rLlpg0baXB2rTWJtiYBuNvUbRVEkSoVKISfFRUsICvtFzet3/MfRZfYHd29+zuve/tJ7l5ycvMOWfOubMzO3NmLjQ0NDQ0NDQ0NDQ0DDesbgOSkDQBmAmcAXyq/XcSMAYY3/5rwF7gX0AfsB3YDPwDeAX4m5ntqNz4SDoqAJKOAC4G5gJzgBnACAfRG4HH25+HzOx9B5lDB0mzJP1E0g6VT5+k30uaL6mn7rbXhqQeSV+StLECpx+OrZKWSDq6bn9UhqTRkhZLeq1Gxw9mh6Rlko6p2z+lIulCSRvq9XUib0q6oW4/uSNpsqTf1uzcLKyWdGrdfnNB0hxJvTU7NA+7JS2s23+5kTRS0jclHajXj4X5jUocpEt5D5A0BrgfuLQM+TXwPPB5M3vHW7B7ABTeXh8EzvOWXTNbgMvM7FVPoa4BkHQSsJqwbDAU6QXmmdnLXgLdAiDpOOApYKqXzA6lFzjfzF73EOaxzkJ7kFrF0Hc+wBTgYUmTPIQVDoCkEYQBd6g985P4JLBK0lFFBXn0gGXA5xzkdBvnAD8qKqTQGCDpQuARYGRRQ7qY683s3ryVcwdA0kRgPXBCXhlDhN3ATDPbkqdykUfQd2mcDzAOuDtv5Vw9QNL5hClnR+2o1cwCM/tj1kqZHShpFPACcFbWukOcrcC0rNudo3IoWoiv8/8OPEZ4lkJ4rC0kn211cjKwBLi9NA2SRkja5LjSeHv7PWKwnkWOOqrkLZW5vSlpgaOxP0zQY+rsnbMkvpbFp5nGAEnPA2dnqXMY1gKfMbNWgq7FwM8ddFXNVuAUMzsQUzg6AJKmAxvyWnUQ+4EzzWxzir6xwJvAWAedVXOpma2OKZjlPcBrs/p3ac4HMLM9wEonnVVzXWzBqB4gaSTwBnBiXosOYp6ZPRyp90zgJQedVbMHmGxmfWkFY3vAOfg4vwU8HVvYzDYATzrorZqxRG7HxgZgbn5bPsQWM/t3xjrLnXRXTZTPqg7Azhx1HgDectJfJRfFFEoNgKQjqXGzxcz2E5a8u43pko5PKxTTA6YCRxa3B4CPZq2g8KY8w0l/lRgwO61QTADOKG7LB3y8Pb/PwpeBaY42VMnpaQWqDsAo4NzYwpJmAD921F81p6UVqDoAAAtiCkmaQkjwGuOsv0pcekDm53YKVyukLqZxL/AxZ91VMzmtQEwAvNdixgOLIsqlziC6gFTfxQRgnIMhg1mmkEmXxBJAJeiuktSeHhOAMo7tTABuSypgZo8Avy5Bd5Wk9oDUxThJ2/BZBxpMCzjPzP6aoHs8IfXlpBL0V8E+M0vMnovpAfucjBnMKGClEg7Gmdl7wFUl2lA2e9IKxAQg6+JZFk4HfpBUoN1DFtGd48HutAIxASj7mP+NkuYnFTCzlcAtdF8QXHrAdgdDkjBghaRTEguZLQduBfpz6GgR0l+i9mkdSfVdTAC2OhiSxrHA/UnjAYCZ/QyYD+zKILtFON81FfgEYWmjqrsiXiksQdL1FaZ0rGpvf6bZdKqkdZEylx6i/kRJ35a0q6R2DHCTRwBmlmzkYO6KtGu0pK9Lej9B1gOSDjvVljRO0lJJ/yypLXM8AtCT0sgy+F4G+06W9AtJ+wbJWKe4NSckHSXpFknbHNvQkvSR/J7/sIGPOhoWy50ZbZwi6fuSdircwJJ5IU/SsZJedbL/uaz6kwy7zcmorCxXyMauDEkPOtl+R4y+2E35PxdoUxFuBh5SWJKoiglOcqL2sWMTs4wwHa1rfX4TcE07T6g0FPaf3yFMi4vwNnBiO6EgkageYGYC7itoVBGmAi9KulPlXjM2i+LOB7gvxvmQLTf0npzGeNEDLAXWSPp0STqiczpTKCenVdKTTgNUUQ5IWiEpdc81Q9sukPQfB9vWe9l0KCOvcDDQkwMKs5YrFa68zNuuqyXtdbKpvEue5H9EyZNdkn4p6WJFLGe02zNR0l2S+p1s2Byre4A8pyQXAH/IWq9itgN/AZ4BngU2mVk/fHDK82zgCsI013PP+ytm9qssFfIEwAg3SKWm3XUQ+wnXG4uQleFyS8wg1gOzko5dHYrMb5lmJkmpOz0dRg8+08vDIeDWrM6HHN8EhStahtPVNDHcY2ZP5KmYpytegF+29FCgl/B+kos8Abgkr7IhSD9wg5m9nVdAE4BifKOdQJabrAe1JxGmeM0tKeGOvC8MTG/zkrUHXELjfIDngIVFnQ/5AjDceRm43OtXOLI+gsrKE+0WNhCuIej1EhjdAxTuihjOzl8LXOTpfMj2CPqsp+Iu40/AXDN711twlgDM81beBbSAbxHugyslSTl2T3g08C7dfWAuK9uAa80s+m6LPMT2gHMZPs7vJ1xDeVbZzof41dDhMv1cByw2s7VVKYztAUUH4C3ACuCrhAyHLxLm053CS8C1wOwqnR+FQrpeK8O2XEvSi5J+KukaSYe8XVdhe/NK1ZP2OMAzbRs69+1e0lUpjeiT9IRCuvdlkjJv8UmaJukOSW+U6OwBXpf0HUkd8SsfMack7wZuPOhfO4E1hJuvnib8Wul/PYxR+CbOAC4nPPZmU3zw7yPY+Wj784LHGo4XMQF4jHB74RrCfdEbq2qAQobB9PZn4ITLCYSftD0GOIIwa9nL/3/SdgchlXFz+7PR6wvS0NDQ0NDQ0NDQ0NDgwf8AVL7tk0fTB80AAAAASUVORK5CYII="/>
                </defs>
            </svg>
            <p>+54 11 1234567</p>
        </div>
        <div className="footerItem">
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.3636 0H3.15152C1.41818 0 0.0157576 1.41818 0.0157576 3.15152L0 22.0606C0 23.7939 1.41818 25.2121 3.15152 25.2121H28.3636C30.097 25.2121 31.5152 23.7939 31.5152 22.0606V3.15152C31.5152 1.41818 30.097 0 28.3636 0ZM28.3636 6.30303L15.7576 14.1818L3.15152 6.30303V3.15152L15.7576 11.0303L28.3636 3.15152V6.30303Z" fill="white"/>
            </svg>
            <p>info.prepagas@blink.com</p>
        </div>
        <div className="footerItem">
            <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0303 0C4.93212 0 0 4.93212 0 11.0303C0 19.303 11.0303 31.5152 11.0303 31.5152C11.0303 31.5152 22.0606 19.303 22.0606 11.0303C22.0606 4.93212 17.1285 0 11.0303 0ZM11.0303 14.9697C8.85576 14.9697 7.09091 13.2048 7.09091 11.0303C7.09091 8.85576 8.85576 7.09091 11.0303 7.09091C13.2048 7.09091 14.9697 8.85576 14.9697 11.0303C14.9697 13.2048 13.2048 14.9697 11.0303 14.9697Z" fill="white"/>
            </svg>
            <p>CABA, Argentina</p>
        </div>
        <div className="footerItem">
            <FontAwesomeIcon icon={faInstagram} style={{fontSize : '35px'}}/>
            <p>comparador.blink</p>
        </div>
    </div>
  )
}

export default Footer