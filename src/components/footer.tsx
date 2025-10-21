import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="bg-transparent border-white" />
            <Button variant="outline" className="border-white text-white">
              →
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Support</h3>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Account</h3>
          <Link href="/account">My Account</Link>
          <Link href="/login">Login / Register</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/shop">Shop</Link>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Quick Link</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms Of Use</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="col-span-full mt-8">
          <p className="text-center text-sm">© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
