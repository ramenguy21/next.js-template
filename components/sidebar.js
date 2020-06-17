import Link from 'next/link'

export default function Sidebar() {
    return(
        <div>
            <ul>
                <li><Link href="/About"><a>About Us.</a></Link></li>
                <li><Link href="/SellerContext"><a>Become A Seller !</a></Link></li>
            </ul>
        </div>
    )
}