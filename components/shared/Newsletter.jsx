import { Mail } from 'lucide-react'
import NewsletterForm from '../forms/NewsletterForm'

const Newsletter = () => {
  return (
    <section className="relative top-5 container overflow-hidden">
    <Mail className="absolute w-20 h-20 stroke-slate-100"/>
    <div className="flex flex-col md:flex-row rounded-lg px-8 py-10 bg-white">
      <div className="flex flex-1 flex-col gap-4">
        <h3 className=" text-5xl font-medium relative">Subscribe to Newsletter!</h3>
        <p className=" text-slate-500 text-base font-medium">Subscibe to get latest updates and Information.</p>
      </div>

      <div className="flex-1 mt-4">
        <NewsletterForm />
      </div>
        
      </div>
    </section>
  )
}

export default Newsletter