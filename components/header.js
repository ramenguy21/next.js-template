import Link from 'next/link'

export default function Header() {
    return(
        <div>
            <div className="bg-blue-500">
        <h1 className="text-white text-4xl text-center font-bold p-3">Teizro</h1>
        <div className="flex flex-row-reverse">
        <ul className="inline">
                <li className="p-2 inline-block underline"><Link as="/join-our-team" href="/sellers"><a>Become A Seller</a></Link></li>
                <li className="p-2 inline-block underline"><Link href="/marketplace"><a>Start Shopping</a></Link></li>
                <li className="p-2 inline-block underline"><Link href="/about"><a>About Us</a></Link></li>         
            </ul>
        </div>
      </div>
            
        </div>
    )
}