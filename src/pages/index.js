import * as React from 'react'
import classnames from 'classnames/bind'
import * as styles from './index.module.scss'
import '../styles/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import logo from '../assets/images/logo.png'
import video1 from '../assets/videos/life_goes_on.mp4'
import video2 from '../assets/videos/fly_to_my_room.mp4'
import video3 from '../assets/videos/telepathy.mp4'
import video4 from '../assets/videos/dynamite.mp4'

const navItems = [
  {
    title: 'Life Goes On',
    subTitle: '그럼에도 우리의 삶은 계속된다',
    description: (
      <>
        감성적인 어쿠스틱 기타 사운드가
        <br />
        특징인 얼터너티브 힙합 장르의 곡
      </>
    ),
    video: video1,
  },
  {
    title: 'Fly To My Room',
    subTitle: '내 방을 여행하는 법',
    description: (
      <>
        '여행'의 정의를 다시 쓰자.
        <br />
        변해버린 상황에서도 새로움을 찾자는
        <br />
        유머러스하고, 긍정적인 메시지를 담은 곡
      </>
    ),
    video: video2,
  },
  {
    title: '잠시',
    subTitle: "'잠시' 떨어져 있는 현재의 상황",
    description: (
      <>
        펑키한 리듬을 기반으로 한
        <br />
        레트로 팝 디스코 장르의 곡
      </>
    ),
    video: video3,
  },
  {
    title: 'Dynamite',
    subTitle: '일상의 소줌함과 인생의 특별함',
    description: (
      <>
        중독성 강한 신나는 리듬에
        <br />
        유쾌하면서 역동적인 퍼포먼스를 더한
        <br />
        디스코 팝 장르
      </>
    ),
    video: video4,
  },
]

const cx = classnames.bind(styles)

// markup
const IndexPage = () => {
  const [focusedNav, setFocusedNav] = React.useState(null)

  const handleNavMouseOver = (e) => {
    const currentTarget = e.currentTarget
    const itemIndex = Number(currentTarget.dataset.index)
    setFocusedNav(itemIndex)
    const backgroundVideo = currentTarget.querySelector('video')
    backgroundVideo.play()
  }
  const handleNavMouseOut = (e) => {
    const currentTarget = e.currentTarget
    setFocusedNav(null)
    const backgroundVideo = currentTarget.querySelector('video')
    backgroundVideo.pause()
  }

  return (
    <>
      <main className={styles.main}>
        <a href="#" aria-label="로고" className={styles.logo}>
          <img src={logo} alt="" width="100" />
        </a>

        <div className={styles.slogan}>
          <h2>New Story</h2>
          <p>
            '코로나19 시대'를 사는 모두에게,
            <br />
            방탄소년단이 전하는 위로
          </p>
        </div>

        <nav className={styles.navigation}>
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                data-index={index}
                onMouseOver={handleNavMouseOver}
                onMouseOut={handleNavMouseOut}
                className={cx(focusedNav === index && styles.opened)}
              >
                <a href="#">
                  <div className={styles.videoBackground}>
                    <video src={item.video} muted loop></video>
                  </div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.description}>
                    <h2>{item.subTitle}</h2>
                    <p>{item.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#" aria-label="인스타그램">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="유튜브">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className={styles.copyright}>
          COPYRIGHT &copy; 2021 BIG HIT MUSIC / HYBE. ALL RIGHTS RESERVED
        </div>
      </footer>
    </>
  )
}

export default IndexPage
