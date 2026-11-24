import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout, ContactEmail, LegalPage, type LegalSection } from '@/components'
import { routes } from '@/lib/routes'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What the Rifaaq app and website collect, why, who processes it, and your choices.',
}

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          Rifaaq is operated by {site.legalEntity}, {site.address} (&ldquo;Rifaaq&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). We are the data controller for the personal
          data described in this policy. This policy covers the Rifaaq mobile app
          (the &ldquo;App&rdquo;) and this website, rifaaq.com.
        </p>
        <p>
          Questions about privacy can be sent to <ContactEmail />.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'What we collect',
    body: (
      <>
        <h3>Account information</h3>
        <ul>
          <li>Your first and last name and email address.</li>
          <li>
            Your password, which we never store in readable form. We keep only a
            salted one-way hash (bcrypt).
          </li>
          <li>
            Optional profile details you choose to add, such as a username,
            gender and short bio, plus your time zone so reminders and daily
            records line up with your day.
          </li>
          <li>
            Short-lived verification and password-reset codes, which are cleared
            once used or expired.
          </li>
        </ul>

        <h3>Content you create</h3>
        <ul>
          <li>
            Tasks and routines: titles, times, task types, tags, repeat
            schedules, reminder settings and which days you completed them.
          </li>
          <li>Goals: the goal text and timeframe you enter, and the tasks linked to them.</li>
          <li>
            Muhaasabah reflections: the mood you pick for the day, any optional
            note you write, and your reflection time and reminder preference.
          </li>
          <li>Your onboarding progress, so the App knows which setup steps you have finished.</li>
        </ul>

        <h3>Circles</h3>
        <ul>
          <li>
            Circles you create or join (name, description and membership) and
            the shared circle tasks in them.
          </li>
          <li>
            Invites: when you invite someone, we store the email address you
            enter so the invite can reach them and be matched to their account.
            Please only invite people who would expect to hear from you.
          </li>
          <li>
            Members of a circle can see each other&apos;s names and the circle&apos;s
            shared tasks and progress.
          </li>
        </ul>

        <h3>Device and notification data</h3>
        <ul>
          <li>
            A push notification token for your device and its platform
            (Android), so we can deliver notifications.
          </li>
          <li>
            A device ID: a random identifier the App generates the first time it
            runs and stores on your phone. It is not your phone&apos;s hardware ID or
            advertising ID. We use it only to tell your devices apart for
            notifications.
          </li>
        </ul>

        <h3>Feedback</h3>
        <ul>
          <li>
            Feedback and feature requests you send from the App (for example from
            the Discover tab), including any rating you give.
          </li>
        </ul>

        <h3>On this website</h3>
        <ul>
          <li>
            If you sign up for our newsletter, your email address, the optional
            first name you give, when you subscribed and your subscription
            status.
          </li>
          <li>
            If you submit an account deletion request, the email address and
            optional reason you provide.
          </li>
          <li>
            Our hosting provider may keep standard server logs (such as IP
            address, browser type and pages requested) for security and
            reliability. This website does not use advertising or analytics
            cookies.
          </li>
        </ul>

        <h3>What we do not collect</h3>
        <p>
          The App does not include third-party analytics, advertising or
          tracking SDKs. Progress figures such as your streak and consistency
          are calculated on your device from your own tasks and reflections. We
          do not collect your location, contacts, photos or advertising ID, and
          we do not sell your personal data.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your data',
    body: (
      <>
        <ul>
          <li>To create and secure your account and sign you in.</li>
          <li>
            To provide the App&apos;s features: storing and syncing your tasks, goals
            and reflections across sessions, running circles and invites, and
            calculating goal progress.
          </li>
          <li>To schedule and deliver the reminders and notifications you turn on.</li>
          <li>
            To send the newsletter if you subscribe. Every newsletter email has
            an unsubscribe link.
          </li>
          <li>To generate task suggestions from goals you describe (see below).</li>
          <li>To respond to support requests, feedback and deletion requests.</li>
          <li>To keep the service secure, prevent abuse and fix problems.</li>
          <li>To meet our legal obligations.</li>
        </ul>
        <p>
          We rely on performing our contract with you (providing the App you
          signed up for), our legitimate interests in running a secure and
          reliable service, your consent where we ask for it (for example
          notification permissions, which you can withdraw in your phone&apos;s
          settings), and legal obligations. These bases apply under the Nigeria
          Data Protection Act 2023 and, where applicable, the EU and UK GDPR.
        </p>
      </>
    ),
  },
  {
    id: 'ai-suggestions',
    title: 'AI goal suggestions (Google Gemini)',
    body: (
      <>
        <Callout>
          <p>
            <strong>
              When you describe a goal, the goal text and timeframe you type are
              sent to Google&apos;s Gemini API to generate task suggestions.
            </strong>
          </p>
        </Callout>
        <p>
          Our servers send Google only the goal text, the timeframe you entered
          and today&apos;s date. We do not send your name, email address or other
          account details with it. Google returns a suggested goal title and a
          short list of recurring tasks, which you can edit or discard before
          anything is saved.
        </p>
        <p>
          Google processes this content under its own terms. Depending on the
          service tier in use, Google may retain the content and use it to
          provide and improve its services, which can include human review. See
          Google&apos;s{' '}
          <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer">
            Gemini API Additional Terms
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          . <strong>Please do not include personal or sensitive information in your goal text.</strong>
        </p>
        <p>
          To keep suggestions fast and available, we cache generated suggestions
          on our servers: an exact-match cache for up to 7 days, and a pool of
          recent suggestions for up to 30 days that may be offered as fallback
          suggestions to other users if the AI service is unavailable. Cached
          suggestions are stored without your name or account details. If you
          prefer not to use AI suggestions, start from scratch or pick a
          template instead.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share data with',
    body: (
      <>
        <p>We share personal data only with service providers who help us run Rifaaq:</p>
        <ul>
          <li>
            <strong>Google (Gemini API)</strong>: goal text and timeframe, to
            generate task suggestions, as described above.
          </li>
          <li>
            <strong>Expo and Google Firebase Cloud Messaging</strong>: your push
            notification token and notification content, to deliver
            notifications to your device.
          </li>
          <li>
            <strong>Cloud hosting and email providers</strong>: to host our
            servers and databases and to send verification, password-reset and
            newsletter emails.
          </li>
        </ul>
        <p>
          Other people see your information only where you choose to share it,
          such as members of a circle you belong to. We may also disclose data
          if required by law, to protect the rights and safety of our users or
          the public, or as part of a merger or acquisition, in which case this
          policy will continue to apply.
        </p>
        <p>
          <strong>Payments.</strong> There are no purchases in the App at
          launch, and neither the App nor this website collects payment
          details. If we introduce payments, we will update this policy and name
          the payment processors involved before they are used.
        </p>
      </>
    ),
  },
  {
    id: 'transfers',
    title: 'International transfers',
    body: (
      <p>
        Our providers, including Google and Expo, may process data outside
        Nigeria, for example in the United States or the European Union. Where
        we transfer personal data, we rely on safeguards recognised under the
        Nigeria Data Protection Act 2023 and other applicable law, such as the
        providers&apos; contractual data protection commitments.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep data',
    body: (
      <>
        <ul>
          <li>
            <strong>While your account is active</strong>, we keep your account
            data and content so the App works.
          </li>
          <li>
            <strong>When you delete your account</strong>, your profile, tasks,
            goals, Muhaasabah reflections, circle memberships, push tokens and
            feedback are deleted from our live systems straight away. Residual
            copies in backups are overwritten within {site.backupRetentionDays} days.
          </li>
          <li>
            <strong>Web deletion requests</strong> are processed within{' '}
            {site.deletionRequestDays} days. We keep a record of the request
            (the email address and date) as evidence that we acted on it.
          </li>
          <li>
            <strong>Newsletter</strong>: we keep your subscription until you
            unsubscribe. After that we keep your email address marked as
            unsubscribed so we don&apos;t email you again; email us to have it
            removed entirely.
          </li>
          <li>
            <strong>Cached AI suggestions</strong> expire after 7 days (exact
            match) or 30 days (recent pool).
          </li>
          <li>
            <strong>Verification and reset codes</strong> are cleared once used
            or expired.
          </li>
        </ul>
        <p>
          See <Link href={routes.accountDeletion}>Account deletion</Link> for
          exactly what is deleted and what may remain.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    body: (
      <>
        <p>Depending on where you live, you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you and get a copy of it;</li>
          <li>correct inaccurate data (you can edit your profile in the App at any time);</li>
          <li>delete your account and data (in the App or via our web form);</li>
          <li>object to or restrict certain processing;</li>
          <li>receive your data in a portable format;</li>
          <li>withdraw consent at any time, for example by turning off notifications;</li>
          <li>
            complain to a data protection authority. In Nigeria, this is the
            Nigeria Data Protection Commission (NDPC).
          </li>
        </ul>
        <p>
          To exercise these rights, email <ContactEmail /> from the address on
          your account. We will respond within 30 days and may need to verify
          your identity first.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        We protect your data with encryption in transit (HTTPS), hashed
        passwords and refresh tokens, short-lived sign-in tokens stored in your
        phone&apos;s secure storage, and access controls on our systems. No method of
        transmission or storage is completely secure, but we work hard to
        protect your information and will notify you and the authorities of a
        breach where the law requires.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Rifaaq is not directed at children under 13, and we do not knowingly
        collect personal data from them. If you believe a child under 13 has
        given us personal data, contact <ContactEmail /> and we will delete it.
        Where local law sets a higher age for consenting to data processing,
        users below that age need permission from a parent or guardian.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as Rifaaq changes. We will post the new
        version here with a new &ldquo;last updated&rdquo; date and, for significant
        changes, let you know in the App or by email before they take effect.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <p>
        {site.legalEntity}
        <br />
        {site.address}
        <br />
        Email: <ContactEmail />
      </p>
    ),
  },
]

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    intro={
      <p>
        Your trust is an amanah. This policy explains what we collect when you
        use Rifaaq, why we collect it, who helps us process it, and the choices
        you have.
      </p>
    }
    sections={sections}
  />
)

export default Privacy
