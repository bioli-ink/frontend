import './home-assets/css/bootstrap.min.css';
import './home-assets/css/index.css';
import './home-assets/js/home';

import Image from 'next/image';

import ModalAuth from './components/modal-auth';
import iconContent from './home-assets/images/content.svg';
import iconFunction from './home-assets/images/function.svg';
import iconLogo from './home-assets/images/logo.png';
import iconOperation from './home-assets/images/operation.svg';
import iconPrice from './home-assets/images/price.svg';
import iconScene from './home-assets/images/scene.svg';
import AuthBtn from './home-components/auth-btn';
import SubscribeBtn from './home-components/subscribe-btn';

export default function Home() {
  return (
    <div>
      {/* ***** Preloader Start ***** */}
      {/* <div id='preloader'>
        <div className='jumper'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* ***** Preloader End ***** */}

      {/* <!-- ***** Header Area Start ***** --> */}
      <header className='header-area header-sticky'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <nav className='main-nav'>
                {/* <!-- ***** Logo Start ***** --> */}
                <a href='#' className='logo'>
                  {/* <img src='./home-assets/images/logo.png' alt='Bioli.ink logo' /> */}
                  <Image src={iconLogo} alt='Bioli.ink logo' />
                  <span>Bioli.ink</span>
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className='nav'>
                  <li>
                    <a href='#welcome' className='active'>
                      主页
                    </a>
                  </li>
                  <li>
                    <a href='#features'>关于产品</a>
                  </li>
                  {/* <!-- <li><a href='#work-process'>如何使用</a></li> --> */}
                  <li>
                    <a href='#testimonials'>客户反馈</a>
                  </li>
                  <li>
                    <a href='#pricing-plans'>订阅方案</a>
                  </li>
                  {/* <!-- <li><a href='#blog'>Blog Entries</a></li> --> */}
                  {/* <!-- <li><a href='#contact-us'>联系我们</a></li> --> */}
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}

      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div className='welcome-area' id='welcome'>
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className='header-text'>
          <div className='container'>
            <div className='row'>
              <div className='offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12'>
                <h1>聚合你的在线信息</h1>
                <h3>仅需一个永久链接、一个永久二维码</h3>
                <p>
                  在美观且极具吸引力的页面上，聚合你的社交账号、音乐、视频等丰富内容。即刻注册属于你的名字，让你的信息绽放光彩。
                </p>
                <AuthBtn />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Small Start ***** --> */}
      <section className='section home-feature'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  className='col-lg-4 col-md-6 col-sm-6 col-12'
                  data-scroll-reveal='enter bottom move 50px over 0.6s after 0.2s'>
                  <div className='features-small-item'>
                    <div className='icon'>
                      <i>
                        {/* <img src='home-assets/images/operation.svg' alt='' /> */}
                        <Image src={iconOperation} alt='icon' />
                      </i>
                    </div>
                    <h5 className='features-title'>更简单的操作</h5>
                    <p>仅需三分钟，即可完成注册，创建专属你的链接</p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  className='col-lg-4 col-md-6 col-sm-6 col-12'
                  data-scroll-reveal='enter bottom move 50px over 0.6s after 0.4s'>
                  <div className='features-small-item'>
                    <div className='icon'>
                      <i>
                        {/* <img src='home-assets/images/function.svg' alt='function' style={{ width: '50px' }} /> */}
                        <Image
                          src={iconFunction}
                          alt='icon'
                          style={{ width: '50px' }}
                        />
                      </i>
                    </div>
                    <h5 className='features-title'>更强大的功能</h5>
                    <p>大量的组件和更多强大的可选项供你使用</p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div
                  className='col-lg-4 col-md-6 col-sm-6 col-12'
                  data-scroll-reveal='enter bottom move 50px over 0.6s after 0.6s'>
                  <div className='features-small-item'>
                    <div className='icon'>
                      <i>
                        {/* <img src='home-assets/images/price.svg' alt='' /> */}
                        <Image src={iconPrice} alt='icon' />
                      </i>
                    </div>
                    <h5 className='features-title'>更合理的价格</h5>
                    <p>即使是付费，合理的价格也远低于其它竞品</p>
                  </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section
        className='section padding-top-90 padding-bottom-0'
        id='features'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-5 col-md-12 col-sm-12 align-self-center'
              data-scroll-reveal='enter left move 30px over 0.6s after 0.4s'>
              {/* <img src='home-assets/images/scene.svg' className='rounded img-fluid d-block mx-auto' alt='App' style={{ width: '60%' }} /> */}
              <Image
                src={iconScene}
                alt='icon'
                className='rounded img-fluid d-block mx-auto'
                style={{ width: '60%' }}
              />
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix'>
              <div className='left-heading'>
                <h2 className='section-title'>适合各种场景下的应用</h2>
              </div>
              <div className='left-text'>
                <p>
                  包括但不限于聚合个人社交链接、个人名片、自我介绍、娱乐类、教程类、交友类、企业级应用等
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='hr'></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className='section padding-bottom-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
              <div className='left-heading'>
                <h2 className='section-title'>所有内容都支持</h2>
              </div>
              <div className='left-text'>
                <div>
                  <h1>图片/轮播图组件</h1>
                  <p>视频、恰饭、带货链接</p>
                </div>

                <div>
                  <h1>标准链接组件</h1>
                  <p>贴文、空间首页、自媒体、公众号</p>
                </div>

                <div>
                  <h1>二维码组件</h1>
                  <p>微信号、公众号、视频号、QQ群聊</p>
                </div>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div
              className='col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big'
              data-scroll-reveal='enter right move 30px over 0.6s after 0.4s'>
              {/* <img src='home-assets/images/content.svg' className='rounded img-fluid d-block mx-auto' alt='App' style={{ width: '60%' }} /> */}
              <Image
                src={iconContent}
                className='rounded img-fluid d-block mx-auto'
                alt='icon'
                style={{ width: '60%' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Home Parallax Start ***** --> */}
      {/* <!-- <section className='mini' id='work-process'>
        <div className='mini-content'>
          <div className='container'>
            <div className='row'>
              <div className='offset-lg-3 col-lg-6'>
                <div className='info'>
                  <h1>Work Process</h1>
                  <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec
                    ante diam.</p>
                </div>
              </div>
            </div> --> */}

      {/* <!-- ***** Mini Box Start ***** --> */}
      {/* <!-- <div className='row'>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                <a href='#' className='mini-box'>
                  <i><img src='home-assets/images/work-process-item-01.png' alt=''></i>
                  <strong>Get Ideas</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                <a href='#' className='mini-box'>
                  <i><img src='home-assets/images/work-process-item-01.png' alt=''></i>
                  <strong>Sketch Up</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                <a href='#' className='mini-box'>
                  <i><img src='home-assets/images/work-process-item-01.png' alt=''></i>
                  <strong>Discuss</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                <a href='#' className='mini-box'>
                  <i><img src='home-assets/images/work-process-item-01.png' alt=''></i>
                  <strong>Revise</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                <a href='#' className='mini-box'>
                  <i><img src='home-assets/images/work-process-item-01.png' alt=''></i>
                  <strong>Approve</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6'>
                <a href='#' className='mini-box'>
                  <i><img src='home-assets/images/work-process-item-01.png' alt=''></i>
                  <strong>Launch</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
            </div> --> */}
      {/* <!-- ***** Mini Box End ***** --> */}
      {/* <!-- </div>
        </div>
      </section> --> */}
      {/* <!-- ***** Home Parallax End ***** --> */}

      {/* <!-- ***** Testimonials Start ***** --> */}
      <section className='section' id='testimonials'>
        <div className='container'>
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className='row'>
            <div className='col-lg-12'>
              <div className='center-heading'>
                <h2 className='section-title'>TA 们的反馈</h2>
              </div>
            </div>
            {/* <!-- <div className='offset-lg-3 col-lg-6'>
              <div className='center-text'>
                <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut
                  sagittis lectus libero.</p>
              </div>
            </div> --> */}
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className='row'>
            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='team-item'>
                <div className='team-content'>
                  <i>
                    {/* <img src='home-assets/images/testimonial-icon.png' alt='' /> */}
                  </i>
                  <p>
                    Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis,
                    egestas scelerisque orci. Maecenas a finibus odio.
                  </p>
                  <div className='user-image'>
                    {/* <img src='http://placehold.it/60x60' alt='' /> */}
                  </div>
                  <div className='team-info'>
                    <h3 className='user-name'>Catherine Soft</h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='team-item'>
                <div className='team-content'>
                  {/* <i><img src='home-assets/images/testimonial-icon.png' alt='' /></i> */}
                  <p>
                    Integer molestie aliquam gravida. Nullam nec arcu finibus,
                    imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                    molestie.
                  </p>
                  <div className='user-image'>
                    {/* <img src='http://placehold.it/60x60' alt='' /> */}
                  </div>
                  <div className='team-info'>
                    <h3 className='user-name'>Kelvin Wood</h3>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='team-item'>
                <div className='team-content'>
                  {/* <i><img src='home-assets/images/testimonial-icon.png' alt='' /></i> */}
                  <p>
                    Quisque diam odio, maximus ac consectetur eu, auctor non
                    lorem. Cras quis est non ante ultrices molestie. Ut vehicula
                    et diam at aliquam.
                  </p>
                  <div className='user-image'>
                    {/* <img src='http://placehold.it/60x60' alt='' /> */}
                  </div>
                  <div className='team-info'>
                    <h3 className='user-name'>David Martin</h3>
                    <span>Website Manager</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ***** Testimonials Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials End ***** --> */}

      {/* <!-- ***** Pricing Plans Start ***** --> */}
      <section className='section colored' id='pricing-plans'>
        <div className='container'>
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className='row'>
            <div className='col-lg-12'>
              <div className='center-heading'>
                <h2 className='section-title'>订阅方案</h2>
              </div>
            </div>
            <div className='offset-lg-3 col-lg-6'>
              <div className='center-text'>
                <p>
                  订阅普通版可为你提供更多能力，订阅高级版可为专业人士和团队提供高级功能
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className='row'>
            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div
              className='col-lg-4 col-md-6 col-sm-12'
              data-scroll-reveal='enter bottom move 50px over 0.6s after 0.2s'>
              <div className='pricing-item'>
                <div className='pricing-header'>
                  <h3 className='pricing-title'>免费版</h3>
                </div>
                <div className='pricing-body'>
                  <div className='price-wrapper'>
                    <span className='currency'>￥</span>
                    <span className='price'>0.00</span>
                    <span className='period'>注册即可使用</span>
                  </div>
                  <ul className='list'>
                    <li className='active'>自定义 bioli.ink 链接</li>
                    <li className='active'>无限制的自定义模块</li>
                    <li className='active'>页面搜索功能</li>
                    <li className='active'>自定义基础样式</li>
                    <li className='active'>可嵌入音视频</li>
                    <li className='active'>基础的分析功能</li>
                  </ul>
                </div>
                <div className='pricing-footer'>
                  <AuthBtn
                    btnText='免费使用'
                    btnProps={{
                      size: 'md',
                      style: { backgroundColor: '#8261ee' },
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div
              className='col-lg-4 col-md-6 col-sm-12'
              data-scroll-reveal='enter bottom move 50px over 0.6s after 0.4s'>
              <div className='pricing-item active'>
                <div className='pricing-header'>
                  <h3 className='pricing-title'>普通版</h3>
                </div>
                <div className='pricing-body'>
                  <div className='price-wrapper'>
                    <span className='currency'>￥</span>
                    <span className='price'>9.90</span>
                    <span className='period'>月付</span>
                  </div>
                  <ul className='list'>
                    <li className='active'>免费版的所有功能</li>
                    <li className='active'>自定义二维码样式和 logo</li>
                    <li className='active'>富文本模块、文件下载模块等</li>
                    <li className='active'>自定义字体</li>
                    <li className='active'>模块自定义时间发布、加密查看</li>
                    <li className='active'>自定义底部 logo</li>
                  </ul>
                </div>
                <div className='pricing-footer'>
                  <SubscribeBtn />
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div
              className='col-lg-4 col-md-6 col-sm-12'
              data-scroll-reveal='enter bottom move 50px over 0.6s after 0.6s'>
              <div className='pricing-item'>
                <div className='pricing-header'>
                  <h3 className='pricing-title'>高级版</h3>
                </div>
                <div className='pricing-body'>
                  <div className='price-wrapper'>
                    <span className='currency'>￥</span>
                    <span className='price'>19.90</span>
                    <span className='period'>月付</span>
                  </div>
                  <ul className='list'>
                    <li className='active'>普通版的所有功能</li>
                    <li className='active'>自定义域名</li>
                    <li className='active'>优先体验内测功能</li>
                    <li className='active'>可管理多个链接</li>
                    <li className='active'>自定义分享元数据</li>
                    <li className='active'>高级分析功能</li>
                  </ul>
                </div>
                <div className='pricing-footer'>
                  <SubscribeBtn />
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Pricing Plans End ***** --> */}

      {/* <!-- ***** Counter Parallax Start ***** --> */}
      {/* <!-- <section className='counter'>
        <div className='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='count-item decoration-bottom'>
                  <strong>126</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='count-item decoration-top'>
                  <strong>63</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='count-item decoration-bottom'>
                  <strong>18</strong>
                  <span>Awards Wins</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='count-item'>
                  <strong>27</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> --> */}
      {/* <!-- ***** Counter Parallax End ***** --> */}

      {/* <!-- ***** Contact Us Start ***** --> */}
      {/* <!-- <section className='section colored' id='contact-us'>
        <div className='container'> --> */}
      {/* <!-- ***** Section Title Start ***** --> */}
      {/* <!-- <div className='row'>
            <div className='col-lg-12'>
              <div className='center-heading'>
                <h2 className='section-title'>Talk To Us</h2>
              </div>
            </div>
            <div className='offset-lg-3 col-lg-6'>
              <div className='center-text'>
                <p>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
              </div>
            </div>
          </div> --> */}
      {/* <!-- ***** Section Title End ***** --> */}

      {/* <!-- <div className='row'> --> */}
      {/* <!-- ***** Contact Text Start ***** --> */}
      {/* <!-- <div className='col-lg-4 col-md-6 col-sm-12'>
              <h5 className='margin-bottom-30'>Keep in touch</h5>
              <div className='contact-text'>
                <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                  <br>auctor non lorem</p>
                <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.
                </p>
              </div>
            </div> --> */}
      {/* <!-- ***** Contact Text End ***** --> */}

      {/* <!-- ***** Contact Form Start ***** --> */}
      {/* <!-- <div className='col-lg-8 col-md-6 col-sm-12'>
              <div className='contact-form'>
                <form id='contact' action='' method='get'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <fieldset>
                        <input name='name' type='text' className='form-control' id='name' placeholder='Full Name' required=''>
                      </fieldset>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <fieldset>
                        <input name='email' type='email' className='form-control' id='email' placeholder='E-Mail Address'
                          required=''>
                      </fieldset>
                    </div>
                    <div className='col-lg-12'>
                      <fieldset>
                        <textarea name='message' rows='6' className='form-control' id='message' placeholder='Your Message'
                          required=''></textarea>
                      </fieldset>
                    </div>
                    <div className='col-lg-12'>
                      <fieldset>
                        <button type='submit' id='form-submit' className='main-button'>Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div> --> */}
      {/* <!-- ***** Contact Form End ***** --> */}
      {/* <!-- </div>
        </div>
      </section> --> */}
      {/* <!-- ***** Contact Us End ***** --> */}

      {/* <!-- ***** Footer Start ***** --> */}
      <footer>
        <div className='container'>
          {/* <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <ul className='social'>
                <li><a href='#'><i className='fa fa-facebook'></i></a></li>
                <li><a href='#'><i className='fa fa-twitter'></i></a></li>
                <li><a href='#'><i className='fa fa-linkedin'></i></a></li>
                <li><a href='#'><i className='fa fa-rss'></i></a></li>
                <li><a href='#'><i className='fa fa-dribbble'></i></a></li>
              </ul>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-12'>
              <p className='copyright'>Copyright &copy; 2024 Bioli.ink</p>
            </div>
          </div>
        </div>
      </footer>

      <ModalAuth />
    </div>
  );
}
