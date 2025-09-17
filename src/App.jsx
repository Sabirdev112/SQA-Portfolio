import React, { useState, useEffect } from 'react'

function Nav({ current, onNavigate }) {
  const [open, setOpen] = useState(false)
  useEffect(() => { setOpen(false) }, [current])
  return (
    <nav className={`navbar ${open ? 'open' : ''}`}>
      <div className="nav-inner">
        <div className="nav-left" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" className="brand" onClick={(e)=>{e.preventDefault(); onNavigate('home')}} aria-label="SQA Portfolio Home">
            <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4facfe" d="M12 2l7 3v6c0 5-3.8 9.7-7 11-3.2-1.3-7-6-7-11V5l7-3z"/>
              <path fill="#00f2fe" d="M16.5 9.5l-4.6 4.6-2.4-2.4a1 1 0 10-1.4 1.4l3.1 3.1a1 1 0 001.4 0l5.3-5.3a1 1 0 00-1.4-1.4z"/>
            </svg>
            <span className="brand-text">SQA Portfolio</span>
          </a>
          <ul className="nav-menu" style={{ marginLeft: 'auto' }}>
            {['home','skills','contact','about'].map(item => (
              <li key={item}><a href="#" className={`nav-link ${current===item?'active':''}`} onClick={(e)=>{e.preventDefault(); onNavigate(item)}}>{item[0].toUpperCase()+item.slice(1)}</a></li>
            ))}
          </ul>
      </div>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open?'true':'false'} onClick={()=>setOpen(v=>!v)}>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  )
}

function Home({ onNavigate }) {
  return (
    <div className="page active" id="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Muhammad sabir</h1>
          <p className="hero-subtitle">Senior QA Engineer & Test Automation Specialist</p>
          <p className="hero-description">Transforming software quality through innovative testing strategies, advanced automation frameworks, and comprehensive QA methodologies.</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-solid" onClick={(e)=>{e.preventDefault(); onNavigate('contact')}}>Let's Connect</a>
            <a href="#" className="btn btn-solid" onClick={(e)=>{e.preventDefault(); onNavigate('skills')}}>View Skills</a>
          </div>
        </div>
        <div className="hero-3d">
          <div className="scene-container">
            <div className="cube">
              <div className="cube-face front">Automation</div>
              <div className="cube-face back">Security</div>
              <div className="cube-face right">API</div>
              <div className="cube-face left">Mobile</div>
              <div className="cube-face top">Unit</div>
              <div className="cube-face bottom">Performance</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionHeader({title, subtitle}){
  return (
    <div className="section-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

function About(){
  return (
    <div className="page" id="about">
      <SectionHeader title="About Me" subtitle="Passionate about quality, driven by excellence, committed to innovation" />
      <div className="about-grid">
        <div className="profile-card">
          <div className="profile-avatar">👨‍💻</div>
          <h3>Muhammad sabir</h3>
          <p>Senior QA Engineer</p>
          <p style={{ marginTop: 20, color: 'var(--text-secondary)' }}>
            1 year in SQA<br/>
            20+ projects delivered<br/>
            92% bug detection rate
          </p>
        </div>
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h3>SQA Engineer - The Outsell</h3>
            <p className="timeline-date">2024 - Present</p>
            <p>Leading quality assurance initiatives for enterprise-level applications. Implemented advanced automation frameworks resulting in 80% faster testing cycles.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({label, percent}){
  const [w, setW] = useState('0%')
  useEffect(()=>{
    const t = setTimeout(()=> setW(`${percent}%`), 300)
    return ()=> clearTimeout(t)
  },[percent])
  return (
    <div className="progress-item">
      <div className="progress-label"><span>{label}</span><span>{percent}%</span></div>
      <div className="progress-bar"><div className="progress-fill" style={{width: w}}/></div>
    </div>
  )
}

function Skills(){
  return (
    <div className="page" id="skills">
      <SectionHeader title="Skills & Expertise" subtitle="Technical proficiency across QA domains" />
      <div className="skills-container">
        <div className="skills-grid">
          <div className="skill-card"><div className="skill-icon">🤖</div><h3>Test Automation</h3><p>Playwright, Cypress, Selenium, CI/CD integration</p></div>
          <div className="skill-card"><div className="skill-icon">🔒</div><h3>Security Testing</h3><p>OWASP guidance, automation hooks, secure pipelines</p></div>
          <div className="skill-card"><div className="skill-icon">⚡</div><h3>Performance</h3><p>k6, JMeter, profiling and tuning</p></div>
          <div className="skill-card"><div className="skill-icon">☁️</div><h3>API Testing</h3><p>RESTful and GraphQL API validation, microservices testing, contract testing, and comprehensive API automation suites.</p></div>
          <div className="skill-card"><div className="skill-icon">📱</div><h3>Mobile Testing</h3><p>Native and hybrid app testing on iOS/Android. Device compatibility, responsive design validation, and mobile-specific test scenarios.</p></div>
          <div className="skill-card"><div className="skill-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38" id="Playwright--Streamline-Svg-Logos" height="38" width="38">
  <desc>
    Playwright Streamline Icon: https://streamlinehq.com
  </desc>
  <path fill="#2d4552" d="M12.660095833333333 20.807731249999996c-1.3889791666666667 0.3942104166666667 -2.300227083333333 1.0853354166666664 -2.9005083333333332 1.7759458333333333 0.5749479166666666 -0.5031437499999999 1.34508125 -0.9649229166666666 2.3839854166666665 -1.2594229166666666 1.062575 -0.30115 1.9690729166666665 -0.29897291666666664 2.718108333333333 -0.15445416666666664v-0.5857145833333333c-0.6389541666666667 -0.058425 -1.3715229166666667 -0.011874999999999998 -2.2015854166666666 0.2236458333333333Zm-2.964 -4.923810416666666 -5.1584208333333335 1.3590145833333334s0.09401041666666665 0.13280208333333335 0.26805833333333334 0.30997708333333335l4.3737208333333335 -1.15246875s-0.061987499999999994 0.7986333333333332 -0.6002020833333332 1.5130333333333332c1.0180833333333332 -0.7702520833333333 1.11684375 -2.0295562499999997 1.11684375 -2.0295562499999997Zm4.317947916666666 12.123187499999998C6.754737499999999 29.96232708333333 2.9140972916666668 21.5495625 1.7513052083333331 17.18300625c-0.537225 -2.0155833333333333 -0.7717404166666666 -3.5420749999999996 -0.8342464583333332 -4.527185416666666 -0.006717291666666666 -0.10228333333333334 -0.0036139583333333327 -0.18849583333333333 0.003617916666666667 -0.26750416666666665 -0.3765720833333333 0.022720833333333332 -0.5568607083333333 0.21846041666666663 -0.5201804166666667 0.7841458333333333 0.06250604166666666 0.9845562499999999 0.29702541666666665 2.51096875 0.8342504166666667 4.527185416666666C2.397020208333333 22.06553125 6.238175 30.47829583333333 13.497520833333331 28.523116666666667c1.5800874999999999 -0.4256791666666666 2.7671520833333334 -1.2009979166666667 3.6582520833333327 -2.1907395833333334 -0.8213541666666667 0.74183125 -1.849333333333333 1.3260416666666666 -3.1417291666666665 1.67473125Zm1.3641604166666665 -17.27187083333333v0.5166416666666666h2.8473874999999995c-0.058425 -0.18291458333333332 -0.11728541666666667 -0.34773958333333327 -0.17571041666666667 -0.5166416666666666h-2.6716770833333334Z" stroke-width="0.3958"></path>
  <path fill="#2d4552" d="M18.862091666666668 14.989970833333333c1.2805208333333333 0.3636520833333333 1.9577916666666664 1.2614416666666666 2.3157437499999998 2.0559583333333333l1.4277708333333334 0.40549166666666664s-0.19474999999999998 -2.7806104166666668 -2.709914583333333 -3.4950499999999995c-2.3529520833333333 -0.6685229166666666 -3.8009104166666665 1.3073583333333332 -3.9770166666666666 1.5630666666666666 0.684475 -0.48766666666666664 1.6839937499999997 -0.8869041666666667 2.9434166666666663 -0.5294666666666666Zm11.36544375 2.068783333333333c-2.355089583333333 -0.6715312499999999 -3.8024937499999996 1.3084666666666667 -3.9760270833333333 1.5605729166666666 0.6849895833333333 -0.48707291666666663 1.6839937499999997 -0.88646875 2.9428625 -0.5274083333333334 1.2784624999999998 0.3642458333333333 1.9551791666666667 1.2609270833333333 2.3142395833333333 2.0559979166666666l1.4298291666666667 0.40699583333333333s-0.19791666666666666 -2.781164583333333 -2.7109041666666664 -3.4961583333333333Zm-1.4185083333333333 7.331624999999999 -11.877335416666666 -3.3204479166666667s0.12856666666666666 0.6518979166666666 0.6219333333333332 1.4960125l10.000175 2.795652083333333c0.8232937499999999 -0.4763458333333333 1.2552270833333332 -0.9712166666666665 1.2552270833333332 -0.9712166666666665ZM20.574427083333333 31.537585416666666C11.169902083333332 29.016166666666667 12.306854166666666 17.033539583333333 13.828635416666666 11.355389583333332c0.6265645833333333 -2.340008333333333 1.27074375 -4.079260416666666 1.8049208333333333 -5.245147916666666 -0.318725 -0.06558958333333333 -0.58270625 0.10228333333333334 -0.8435604166666666 0.6327791666666667 -0.5671895833333334 1.1504104166666667 -1.292475 3.0234541666666668 -1.99440625 5.645533333333333 -1.5213458333333332 5.67803125 -2.6583374999999996 17.660262499999998 6.745791666666667 20.18168125 4.432620833333333 1.1875 7.885752083333333 -0.6173416666666667 10.459895833333333 -3.4517458333333333 -2.4433604166666667 2.213025 -5.5629229166666665 3.4537645833333332 -9.42685 2.419095833333333Z" stroke-width="0.3958"></path>
  <path fill="#e2574c" d="M15.378283333333332 25.19902708333333V22.781l-6.718360416666666 1.9050666666666667s0.4964145833333333 -2.8844374999999998 4.000252083333333 -3.8783749999999997c1.062575 -0.30115 1.9691916666666667 -0.29909166666666664 2.718108333333333 -0.15445416666666664V10.735197916666666h3.3639104166666667c-0.36626458333333334 -1.1318062500000001 -0.720575 -2.0031541666666666 -1.0181624999999999 -2.608620833333333 -0.49229791666666667 -1.00213125 -0.9969458333333333 -0.3378041666666667 -2.1426458333333334 0.6204291666666666 -0.8069458333333334 0.67414375 -2.8463187499999996 2.112245833333333 -5.915175 2.939220833333333 -3.0689354166666667 0.8274895833333333 -5.549979166666667 0.6080395833333333 -6.585178333333333 0.42876666666666663 -1.4675639583333333 -0.253175 -2.2351797916666665 -0.5754625 -2.1633677083333334 0.5407875 0.06249416666666666 0.9845562499999999 0.29702541666666665 2.5110875 0.8342464583333332 4.527185416666666C2.914176458333333 21.54896875 6.755331249999999 29.961733333333335 14.0146375 28.006554166666664c1.8962395833333332 -0.5109416666666666 3.234670833333333 -1.5208312499999999 4.162425 -2.8080416666666665h-2.7987791666666664v0.0005145833333333333ZM4.537239583333333 17.242895833333332l5.158935416666666 -1.3590145833333334s-0.15037708333333333 1.9846291666666664 -2.0843791666666664 2.4944625c-1.9345166666666667 0.5093187499999999 -3.0745562499999997 -1.1354479166666667 -3.0745562499999997 -1.1354479166666667Z" stroke-width="0.3958"></path>
  <path fill="#2ead33" d="M34.79386875 10.849791666666667c-1.3410041666666666 0.23508541666666666 -4.55821875 0.5279625 -8.534127083333333 -0.5377395833333333 -3.9770166666666666 -1.06506875 -6.615720833333333 -2.9278604166666664 -7.66115625 -3.80344375 -1.482 -1.2412937499999999 -2.1338979166666667 -2.1039729166666663 -2.775464583333333 -0.7991083333333333 -0.5671895833333334 1.1508854166666667 -1.2925145833333331 3.02396875 -1.9945645833333332 5.646047916666666 -1.5212270833333332 5.67803125 -2.6581791666666663 17.660262499999998 6.74583125 20.181641666666664 9.40203125 2.5192812499999997 14.407462499999998 -8.426777083333333 15.928808333333333 -14.105322916666667 0.70205 -2.621564583333333 1.0098895833333332 -4.606708333333333 1.0945979166666666 -5.886714583333333 0.09658333333333333 -1.4499770833333332 -0.8993729166666666 -1.0290875 -2.8039249999999996 -0.6953604166666666ZM15.899516666666667 15.547462499999998s1.482 -2.3049375 3.9955812499999994 -1.5905375c2.515164583333333 0.7144395833333332 2.709914583333333 3.4950895833333333 2.709914583333333 3.4950895833333333l-6.705495833333333 -1.9045520833333331ZM22.035249999999998 25.890666666666664c-4.421220833333333 -1.2951270833333333 -5.103083333333333 -4.820695833333333 -5.103083333333333 -4.820695833333333l11.876781249999999 3.3205666666666662c0 -0.0005541666666666667 -2.397325 2.7790270833333333 -6.773697916666666 1.5001291666666665Zm4.199158333333333 -7.2454125000000005s1.4799416666666665 -2.3033541666666664 3.9930479166666664 -1.5868958333333334c2.5130270833333332 0.7155083333333333 2.7109041666666664 3.4961583333333333 2.7109041666666664 3.4961583333333333l-6.703952083333332 -1.9092625Z" stroke-width="0.3958"></path>
  <path fill="#d65348" d="M13.030675 23.44683125 8.660041666666666 24.685552083333334s0.4747625 -2.7046895833333333 3.694470833333333 -3.776527083333333l-2.4748687499999997 -9.287793749999999 -0.21386875 0.06499583333333334c-3.0688958333333334 0.8276083333333334 -5.549939583333333 0.6080395833333333 -6.5851308333333325 0.42876666666666663 -1.4675560416666666 -0.25305625 -2.2351679166666667 -0.5754625 -2.1633677083333334 0.54090625 0.06250604166666666 0.9845562499999999 0.29702541666666665 2.51096875 0.8342464583333332 4.527145833333333 1.1622735416666665 4.365922916666666 5.003452083333333 12.7786875 12.26271875 10.823508333333333l0.21386875 -0.06717291666666667 -1.1974354166666668 -4.49255ZM4.537358333333333 17.242974999999998l5.158935416666666 -1.35909375s-0.15037708333333333 1.9846291666666664 -2.084339583333333 2.4944625c-1.9345562499999998 0.5093187499999999 -3.0745958333333334 -1.13536875 -3.0745958333333334 -1.13536875Z" stroke-width="0.3958"></path>
  <path fill="#1d8d22" d="m22.234670833333332 25.93915625 -0.19997499999999999 -0.04860833333333334c-4.42118125 -1.2950083333333333 -5.103083333333333 -4.820577083333333 -5.103083333333333 -4.820577083333333l6.1244125 1.7118999999999998 3.2423895833333334 -12.4594875 -0.03922708333333333 -0.01033125c-3.9770166666666666 -1.06506875 -6.6155625 -2.9278604166666664 -7.66115625 -3.80344375 -1.482 -1.2412937499999999 -2.1338979166666667 -2.1039729166666663 -2.775464583333333 -0.7991083333333333 -0.5666354166666666 1.1508854166666667 -1.2919604166666667 3.02396875 -1.9940104166666663 5.646047916666666 -1.5212270833333332 5.67803125 -2.6581791666666663 17.660262499999998 6.74583125 20.1815625l0.19273125 0.043422916666666665 1.4675520833333333 -5.6413770833333325ZM15.899516666666667 15.547502083333333s1.482 -2.304977083333333 3.9955812499999994 -1.5905770833333333c2.515164583333333 0.7144395833333332 2.709914583333333 3.4950895833333333 2.709914583333333 3.4950895833333333l-6.705495833333333 -1.9045124999999998Z" stroke-width="0.3958"></path>
  <path fill="#c04b41" d="m13.253370833333332 23.383141666666667 -1.1721020833333333 0.33265833333333333c0.27688541666666666 1.5610083333333333 0.7649479166666667 3.059079166666667 1.53104375 4.382508333333333 0.13331666666666667 -0.029449999999999997 0.2655645833333333 -0.05474375 0.401375 -0.09195208333333334 0.3559333333333333 -0.09602916666666667 0.6859791666666667 -0.2149375 1.0037541666666667 -0.3446125 -0.8559499999999999 -1.2701895833333332 -1.4221895833333333 -2.7331104166666664 -1.7640708333333333 -4.278602083333333Zm-0.45770208333333334 -10.994508333333334c-0.6023 2.24805625 -1.1411479166666665 5.483795833333333 -0.9928291666666667 8.7293125 0.26548541666666664 -0.11522708333333334 0.5459333333333333 -0.22257708333333334 0.8574541666666666 -0.3109666666666666l0.21699583333333333 -0.04848958333333333c-0.26453541666666663 -3.466747916666667 0.30728541666666664 -6.999441666666667 0.9514645833333334 -9.403020833333333 0.16328125 -0.6080395833333333 0.3269979166666666 -1.17360625 0.49019999999999997 -1.7010541666666665 -0.2628729166666667 0.16731875 -0.5459333333333333 0.33879375 -0.8683395833333334 0.5154541666666667 -0.21743125 0.6710958333333333 -0.437 1.4046145833333334 -0.6549458333333333 2.218764583333333Z" stroke-width="0.3958"></path>
</svg></div><h3>playwright</h3><p>k6, JMeter, profiling and tuning</p></div>
        
        </div>
        <div className="progress-bars">
          <h2 style={{textAlign:'center', marginBottom: 40, color: 'var(--text-primary)'}}>Technical Proficiency</h2>
          <SkillBar label="Test Automation" percent={95} />
          <SkillBar label="Selenium WebDriver" percent={92} />
          <SkillBar label="Cypress" percent={88} />
          <SkillBar label="Performance Testing" percent={85} />
          <SkillBar label="API Testing" percent={90} />
          <SkillBar label="Security Testing" percent={78} />
        </div>
      </div>
    </div>
  )
}

function Contact(){
  function onSubmit(e){
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim() || 'Anonymous'
    const email = form.email.value.trim() || 'No email provided'
    const subject = form.subject.value.trim() || 'Contact from portfolio'
    const message = form.message.value.trim()
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadsabir.dev@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    const mailtoUrl = `mailto:muhammadsabir.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    const win = window.open(gmailUrl, '_blank', 'noopener')
    if(!win){ window.location.href = mailtoUrl }
  }
  return (
    <div className="page" id="contact">
      <SectionHeader title="Let's Connect" subtitle="Ready to drive excellence together" />
      <div className="contact-container">
        <div className="contact-form">
          <h2 style={{marginBottom: 30, color: 'var(--text-primary)'}}>Send a Message</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group"><input name="name" type="text" className="form-input" placeholder="Your Name" required/></div>
            <div className="form-group"><input name="email" type="email" className="form-input" placeholder="Your Email" required/></div>
            <div className="form-group"><input name="subject" type="text" className="form-input" placeholder="Subject" required/></div>
            <div className="form-group"><textarea name="message" className="form-textarea" rows="6" placeholder="Your Message" required/></div>
            <button type="submit" className="btn btn-solid" style={{width:'100%'}}>Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-item"><div className="contact-icon">📧</div><div><h4>Email</h4><p style={{color:'var(--text-secondary)'}}>muhammadsabir.dev@gmail.com</p></div></div>
          <div className="contact-item"><div className="contact-icon">📱</div><div><h4>Phone</h4><p style={{color:'var(--text-secondary)'}}>+92-3079410621</p></div></div>
          <div className="contact-item">
  <div className="contact-icon">
    {/* LinkedIn SVG */}
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{display:'block'}} xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#0077B5"/>
      <path d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.523-1.387 2.7 0 3.2 1.776 3.2 4.084v4.21h-2.667v-3.733c0-.89-.016-2.034-1.24-2.034-1.242 0-1.433.97-1.433 1.97v3.797h-2.68v-8z" fill="#fff"/>
    </svg>
  </div>
  <div>
    <h4>Linkedin</h4>
    <a href="https://www.linkedin.com/in/muhammad-sabir-399a00351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <p style={{color:'var(--text-secondary)'}}>Linkedin/Muhammad Sabir</p>
    </a>
  </div>
</div>
<div className="contact-item">
  <div className="contact-icon">
    {/* GitHub SVG */}
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{display:'block'}} xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#181717"/>
      <path d="M16 6C10.477 6 6 10.477 6 16c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0116 9.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C23.138 24.162 26 20.418 26 16c0-5.523-4.477-10-10-10z" fill="#fff"/>
    </svg>
  </div>
  <div>
    <h4>Github</h4>
    <a href="https://www.github.com/sabirdev112">
      <p style={{color:'var(--text-secondary)'}}>Github/Muhammad Sabir</p>
    </a>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const [page, setPage] = useState('home')
  useEffect(()=>{
    document.documentElement.style.setProperty('--primary-gradient','linear-gradient(135deg, #667eea 0%, #764ba2 100%)')
    document.documentElement.style.setProperty('--secondary-gradient','linear-gradient(135deg, #f093fb 0%, #f5576c 100%)')
    document.documentElement.style.setProperty('--accent-gradient','linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)')
    document.documentElement.style.setProperty('--dark-gradient','linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)')
    document.documentElement.style.setProperty('--glass','rgba(255,255,255,0.1)')
    document.documentElement.style.setProperty('--glass-border','rgba(255,255,255,0.2)')
    document.documentElement.style.setProperty('--text-primary','#ffffff')
    document.documentElement.style.setProperty('--text-secondary','#b8c5d1')
  },[])
  return (
    <div>
      <Nav current={page} onNavigate={setPage} />
      {page==='home' && <Home onNavigate={setPage} />}
      {page==='skills' && <Skills />}
      {page==='about' && <About />}
      {page==='contact' && <Contact />}
      <a className="whatsapp-float" href="https://wa.me/923079410621?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20connect" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  {/* Real WhatsApp SVG icon */}
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g>
      <circle cx="24" cy="24" r="24" fill="#25D366"/>
      <path fill="#fff" d="M34.6 29.2c-.5-.2-2.7-1.3-3.1-1.5-.4-.2-.7-.2-1 .2-.3.4-1.1 1.5-1.4 1.8-.3.3-.5.4-1 .1-.5-.2-2-0.7-3.8-2.2-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-.9.2-.2.5-.6.7-.8.2-.3.2-.5.3-.8.1-.3 0-.6 0-.8 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.8 5 3.4 1.3 3.4.9 4 .8.6-.1 2-0.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.4-.2-.9-.4z"/>
      <path fill="#fff" d="M24 13.5c-5.8 0-10.5 4.7-10.5 10.5 0 1.9.5 3.7 1.4 5.3l-1.5 5.5 5.7-1.5c1.5.8 3.2 1.2 4.9 1.2 5.8 0 10.5-4.7 10.5-10.5S29.8 13.5 24 13.5zm0 19c-1.6 0-3.2-.4-4.6-1.1l-.3-.2-3.4.9.9-3.3-.2-.3c-.8-1.4-1.2-3-1.2-4.6 0-5 4-9 9-9s9 4 9 9-4 9-9 9z"/>
    </g>
  </svg>
</a>
    </div>
  )
}
