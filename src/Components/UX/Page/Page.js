import './Page.css'

const Page = ({ children }) => {
  return (
    <section className='page-container'>
      <main>
        {children}
      </main>
    </section>
  )
}

export default Page;