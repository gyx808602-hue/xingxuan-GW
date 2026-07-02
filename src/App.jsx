const capabilityItems = [
  {
    title: '产品官网构建',
    description: '用清晰的结构和稳定的前端工程能力，搭建有品牌辨识度的官网首页。'
  },
  {
    title: '前端工程能力',
    description: '围绕 React 生态完成页面开发、组件拆分与后续可扩展的项目结构。'
  },
  {
    title: '数字品牌表达',
    description: '通过克制的科技感视觉，让品牌既专业可靠，又具有未来气质。'
  },
  {
    title: '方案快速落地',
    description: '从页面结构、内容表达到样式实现，尽可能用简单方案高效交付。'
  }
];

const solutionItems = [
  {
    tag: '01',
    title: '企业科技官网',
    description: '适合建立品牌认知、展示技术实力与承接潜在合作线索。'
  },
  {
    tag: '02',
    title: '产品展示页面',
    description: '聚焦产品能力亮点，通过信息分层强化科技产品的专业表达。'
  },
  {
    tag: '03',
    title: '解决方案落地页',
    description: '将复杂技术服务整理成可理解、可阅读、可转化的页面内容。'
  }
];

const valueItems = [
  { value: '4+', label: '核心能力模块' },
  { value: '3', label: '典型解决方案方向' },
  { value: '100%', label: '聚焦简洁稳定交付' }
];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">行轩</div>
        <nav className="site-nav" aria-label="主导航">
          <a href="#hero">首页</a>
          <a href="#capabilities">技术能力</a>
          <a href="#solutions">解决方案</a>
          <a href="#contact">联系我们</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">TECH · PRODUCT · DELIVERY</p>
            <h1>让技术能力成为品牌增长与产品表达的核心引擎</h1>
            <p className="hero-description">
              行轩专注于科技产品展示、技术能力包装与数字品牌表达，
              用更清晰的结构与更稳定的前端实现，帮助业务建立高质量官网形象。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#capabilities">
                了解能力
              </a>
              <a className="secondary-button" href="#solutions">
                查看方案
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="技术能力摘要">
            <div className="panel-chip">行轩能力矩阵</div>
            <div className="panel-grid">
              <article>
                <strong>01</strong>
                <span>官网页面构建</span>
              </article>
              <article>
                <strong>02</strong>
                <span>前端工程实现</span>
              </article>
              <article>
                <strong>03</strong>
                <span>解决方案展示</span>
              </article>
              <article>
                <strong>04</strong>
                <span>品牌视觉表达</span>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section" id="capabilities">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>围绕官网、产品与品牌表达构建技术能力</h2>
            <p>
              页面不是简单堆叠模块，而是把品牌信息、技术价值与转化入口组织成清晰链路。
            </p>
          </div>

          <div className="card-grid four-column">
            {capabilityItems.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="solutions">
          <div className="section-heading">
            <p className="eyebrow">Solutions</p>
            <h2>适合科技型团队的三类基础页面方案</h2>
            <p>
              从品牌官网到产品页面，再到技术解决方案展示页，行轩都强调结构清晰和表达效率。
            </p>
          </div>

          <div className="card-grid three-column">
            {solutionItems.map((item) => (
              <article className="solution-card" key={item.title}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="value-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Brand Value</p>
            <h2>用克制而清晰的科技感，建立可靠的第一印象</h2>
          </div>

          <div className="value-grid">
            {valueItems.map((item) => (
              <article className="value-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>让官网先成为业务表达的起点</h2>
          <p>
            如果你需要一个简洁、专业、带有科技感的品牌官网，行轩可以从首页开始帮你完成第一步。
          </p>
        </div>

        <div className="footer-contact">
          <p>邮箱：hello@xingxuan.tech</p>
          <p>电话：400-000-0000</p>
          <p>地址：科技业务展示信息可按后续需要替换</p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 行轩. All rights reserved.</span>
          <span>科技产品与技术能力展示官网</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
