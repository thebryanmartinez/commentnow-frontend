import './Page.css'

const Page = ({ header: headerComponent, footer: footerComponent, children }) => {
  const hasHeader = headerComponent && true;
  const hasFooter = footerComponent && true;
  let pageClassNames = ['page-container']
  if(!hasHeader) pageClassNames.push('no-header');
  if(!hasFooter) pageClassNames.push('no-footer')
  return (
    <section className={pageClassNames.join(' ')}>
      {hasHeader &&
      <header className='page-header'>
        {headerComponent}
      </header>}
      <main>
        {children}
      </main>
    </section>
  )
}

export default Page;