import { Link } from 'react-router-dom'
import { Divider, Form } from 'tdesign-react'
import { Button, Input } from 'components'
import styles from './Register.module.scss'

const { FormItem } = Form

const Register = () => {
  return (
    <section className={styles.register}>
      <div className={styles.content}>
        <h1 className={styles.title}>Create your account</h1>
        <h3 className={styles.noAccount}>
          Have an account? <Link to="/login">Sign In</Link>
        </h3>
        <div className={styles.methods}>
          <Button className={styles.button} block theme="default" variant="outline">
            <div className={styles.inner}>
              <svg width="52" height="52" role="img">
                <title>Google&apos;s Logo</title>
                <g id="Google-Button" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <rect x="0" y="0" width="52" height="52" rx="2" />
                  <g id="logo_googleg_48dp" transform="translate(13.65, 13.65) scale(1.4300000000000002)">
                    <path
                      d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                      id="Shape"
                      fill="#4285F4"
                    />
                    <path
                      d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                      id="Shape"
                      fill="#34A853"
                    />
                    <path
                      d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                      id="Shape"
                      fill="#FBBC05"
                    />
                    <path
                      d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                      id="Shape"
                      fill="#EA4335"
                    />
                    <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape" />
                  </g>
                </g>
              </svg>
              <div className={styles.label}>Google</div>
            </div>
          </Button>
          <Button className={styles.button} block theme="default" variant="outline">
            <div className={styles.inner}>
              <svg width="52" height="52" viewBox="0 0 52 52" display="inline-block" role="img">
                <title>GitHub&apos;s Logo</title>
                <g transform="translate(13.055555555555555, 11.555555555555555) scale(1.1818181818181819)">
                  <path
                    fill="#001E2B"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0651 0.0986328C5.43944 0.0986328 0.0661621 5.47118 0.0661621 12.099C0.0661621 17.4008 3.5042 21.8982 8.27268 23.485C8.87306 23.5955 9.09185 23.2249 9.09185 22.9067C9.09185 22.6223 9.08154 21.8673 9.07564 20.8661C5.73779 21.591 5.03353 19.2572 5.03353 19.2572C4.48766 17.8708 3.70089 17.5017 3.70089 17.5017C2.61135 16.7577 3.7834 16.7724 3.7834 16.7724C4.98785 16.8572 5.62139 18.0093 5.62139 18.0093C6.69177 19.8429 8.43032 19.3132 9.11395 19.006C9.22298 18.2311 9.53312 17.7021 9.87567 17.4023C7.21113 17.0995 4.40957 16.0697 4.40957 11.4714C4.40957 10.1616 4.87736 9.0897 5.64497 8.25137C5.52121 7.94786 5.1094 6.7272 5.76283 5.07558C5.76283 5.07558 6.76986 4.75292 9.06238 6.30582C10.0193 6.03915 11.0462 5.90655 12.0665 5.90139C13.0861 5.90655 14.1123 6.03915 15.0707 6.30582C17.3617 4.75292 18.3673 5.07558 18.3673 5.07558C19.0222 6.7272 18.6104 7.94786 18.4874 8.25137C19.2564 9.0897 19.7205 10.1616 19.7205 11.4714C19.7205 16.0814 16.9146 17.0958 14.2419 17.3927C14.6721 17.7633 15.0559 18.4955 15.0559 19.6153C15.0559 21.219 15.0412 22.5133 15.0412 22.9067C15.0412 23.2279 15.2578 23.6014 15.8663 23.4842C20.6311 21.8938 24.0662 17.3994 24.0662 12.099C24.0662 5.47118 18.6929 0.0986328 12.0651 0.0986328Z"
                  />
                </g>
              </svg>
              <div className={styles.label}>Github</div>
            </div>
          </Button>
          <Button className={styles.button} block theme="default" variant="outline">
            <div className={styles.inner}>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
              >
                <title>Wallet&apos;s Logo</title>
                <path
                  d="M0 0m365.714286 0l292.571428 0q365.714286 0 365.714286 365.714286l0 292.571428q0 365.714286-365.714286 365.714286l-292.571428 0q-365.714286 0-365.714286-365.714286l0-292.571428q0-365.714286 365.714286-365.714286Z"
                  fill="#6386FA"
                  opacity="0"
                />
                <path
                  d="M219.428571 274.285714m73.142858 0l438.857142 0q73.142857 0 73.142858 73.142857l0 329.142858q0 73.142857-73.142858 73.142857l-438.857142 0q-73.142857 0-73.142858-73.142857l0-329.142858q0-73.142857 73.142858-73.142857Z"
                  fill="#6386FA"
                />
                <path
                  d="M493.714286 420.571429h237.714285v182.857142h-237.714285a91.428571 91.428571 0 0 1-91.428572-91.428571 91.428571 91.428571 0 0 1 91.428572-91.428571z"
                  fill="#FFFFFF"
                />
                <path
                  d="M493.714286 512m-54.857143 0a54.857143 54.857143 0 1 0 109.714286 0 54.857143 54.857143 0 1 0-109.714286 0Z"
                  fill="#6386FA"
                />
              </svg>
              <div className={styles.label}>Wallet</div>
            </div>
          </Button>
        </div>
        <Divider align="center" layout="horizontal" className={styles.divider}>
          {' '}
          Or with email and password{' '}
        </Divider>

        <Form labelWidth={0} className={styles.form}>
          <FormItem name="account" label="Account" className={styles.formItem}>
            <Input placeholder="请输入账户名" />
          </FormItem>
          <FormItem name="password" label="Password" className={styles.formItem}>
            <Input type="password" placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <Button theme="primary" type="submit" block className={styles.submit}>
              Sign Up
            </Button>
          </FormItem>
        </Form>
      </div>
      <div className={styles.bg} />
    </section>
  )
}

export default Register
