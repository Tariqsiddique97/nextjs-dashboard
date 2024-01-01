import '../app/ui/global.css';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import DashboardSkeleton from './ui/skeletons';
import DasboardPage from './pages/Dashboard/dashboard';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { sql } from '@vercel/postgres';
import { LatestInvoiceRaw } from './lib/definitions';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const totalInvoices = allInvoices.length;
  // const totalCustomers = allCustomers.length;
  // const data = await sql<LatestInvoiceRaw>`
  // SELECT invoices.amount, customers.name, customers.image_url, customers.email
  // FROM invoices
  // JOIN customers ON invoices.customer_id = customers.id
  // ORDER BY invoices.date DESC
  // LIMIT 5`;

  return (
    <main className="flex min-h-screen flex-col ">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div> */}
      <DasboardPage>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
          <Card title="Pending" value={totalPendingInvoices} type="pending" />
          <Card
            title="Total Invoices"
            value={numberOfInvoices}
            type="invoices"
          />
          <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          /> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart revenue={[]} />
          <LatestInvoices latestInvoices={[]} />
        </div>
      </DasboardPage>
    </main>
  );
}
