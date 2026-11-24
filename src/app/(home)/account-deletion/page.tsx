import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout, ContactEmail, Maxwidth, PageHero, Prose } from '@/components'
import { routes } from '@/lib/routes'
import { site } from '@/lib/site'
import DeletionRequestForm from './DeletionRequestForm'

export const metadata: Metadata = {
  title: 'Account deletion',
  description:
    'How to delete your Rifaaq account and data, in the app or on the web, and what is deleted.',
}

const AccountDeletion = () => (
  <>
    <PageHero eyebrow="Your data, your choice" title="Delete your Rifaaq account" pattern={3}>
      You can permanently delete your Rifaaq account and its data at any time,
      in the app or from this page.
    </PageHero>

    <Maxwidth className="grid gap-12 py-12 lg:grid-cols-[1fr_24rem] lg:gap-16 lg:py-16">
      <Prose>
        <section id="in-app">
          <h2>Delete in the app (immediate)</h2>
          <ol>
            <li>Open Rifaaq and sign in.</li>
            <li>
              Tap the <strong>menu</strong> button (three lines) at the top
              right of any tab.
            </li>
            <li>
              Tap <strong>View account</strong>.
            </li>
            <li>
              Scroll down and tap <strong>Delete account</strong>.
            </li>
            <li>
              Confirm by tapping <strong>Delete</strong>.
            </li>
          </ol>
          <p>
            Your account and data are deleted immediately and you are signed
            out. This cannot be undone.
          </p>
        </section>

        <section id="deleted">
          <h2>What is deleted</h2>
          <ul>
            <li>Your profile and sign-in details: name, email, password hash, username, bio and preferences</li>
            <li>Your tasks, tags, repeat schedules and reminder settings</li>
            <li>Your goals</li>
            <li>Your Muhaasabah reflections, moods, notes and reflection settings</li>
            <li>Your circle memberships (you are removed from every circle)</li>
            <li>Your push notification tokens and device ID record</li>
            <li>Feedback and feature requests you sent</li>
          </ul>
        </section>

        <section id="retained">
          <h2>What may remain, and for how long</h2>
          <ul>
            <li>
              <strong>Backups:</strong> residual copies in our encrypted
              backups are overwritten within {site.backupRetentionDays} days.
            </li>
            <li>
              <strong>Circles you created</strong> may stay available to their
              other members, without you in them.
            </li>
            <li>
              <strong>Invites other people sent to your email address</strong>{' '}
              stay in their circles until they cancel them.
            </li>
            <li>
              <strong>Daily completion records</strong> for your deleted tasks
              are no longer linked to your account.
            </li>
            <li>
              <strong>Cached AI suggestions</strong>, which never include your
              name or email, expire within 30 days.
            </li>
            <li>
              <strong>Web deletion requests:</strong> we keep a record of the
              request (email address and date) to show we completed it.
            </li>
            <li>
              Data cached on your phone is removed when you uninstall the app.
            </li>
          </ul>
          <p>
            We do not keep any other data after deletion unless the law requires
            it. Read more in our <Link href={routes.privacy}>Privacy Policy</Link>.
          </p>
        </section>
      </Prose>

      <aside id="request" className="scroll-mt-24">
        <div className="rounded-[24px] bg-light-gray p-6 lg:sticky lg:top-24 lg:p-8">
          <h2 className="text-[1.5rem] leading-tight font-bold text-primary">
            Can&apos;t open the app?
          </h2>
          <p className="mt-2 mb-6 leading-relaxed text-deep-gray">
            Request deletion here. We will verify the request against the email
            on the account and complete it within {site.deletionRequestDays}{' '}
            days.
          </p>
          <DeletionRequestForm />
          <Callout className="mt-6 text-sm">
            <p>
              Questions? Email <ContactEmail />.
            </p>
          </Callout>
        </div>
      </aside>
    </Maxwidth>
  </>
)

export default AccountDeletion
