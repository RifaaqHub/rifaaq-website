import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactEmail, LegalPage, type LegalSection } from '@/components'
import { routes } from '@/lib/routes'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply when you use the Rifaaq app and website.',
}

const sections: LegalSection[] = [
  {
    id: 'agreement',
    title: 'Agreement',
    body: (
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and{' '}
        {site.legalEntity} (&ldquo;Rifaaq&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) covering your use of
        the Rifaaq mobile app and rifaaq.com (together, the &ldquo;Service&rdquo;). By
        creating an account or using the Service you agree to these Terms and
        to our <Link href={routes.privacy}>Privacy Policy</Link>. If you do not
        agree, please do not use the Service.
      </p>
    ),
  },
  {
    id: 'eligibility',
    title: 'Who can use Rifaaq',
    body: (
      <p>
        You must be at least 13 years old to use Rifaaq. If you are under the
        age of legal majority where you live, you may use Rifaaq only with the
        permission of a parent or guardian, who agrees to these Terms on your
        behalf.
      </p>
    ),
  },
  {
    id: 'account',
    title: 'Your account',
    body: (
      <ul>
        <li>Give accurate information when you sign up and keep it up to date.</li>
        <li>
          Keep your password secure. You are responsible for activity on your
          account; tell us promptly at <ContactEmail /> if you think it has been
          compromised.
        </li>
        <li>One person per account. Do not share or sell your account.</li>
      </ul>
    ),
  },
  {
    id: 'service',
    title: 'The Service',
    body: (
      <>
        <p>
          Rifaaq helps you plan tasks and routines, set goals, reflect daily
          (Muhaasabah) and stay accountable with others in Circles. Rifaaq is
          free to use at launch and contains no in-app purchases. If we
          introduce paid features, we will tell you the price and terms before
          you are charged, and those terms will apply only if you choose to buy.
        </p>
        <p>
          We are continually improving Rifaaq, so features may change, be added
          or be removed. We aim for the Service to be available and reliable,
          but we do not guarantee it will be uninterrupted or error-free, or
          that every reminder will be delivered on time. Reminders depend on
          your device settings and network.
        </p>
      </>
    ),
  },
  {
    id: 'ai',
    title: 'AI goal suggestions',
    body: (
      <p>
        Task suggestions generated from goals you describe are produced
        automatically using Google&apos;s Gemini AI. They are offered as a starting
        point only and may be incomplete or inaccurate. They are not religious
        rulings (fatwa), or medical, financial or other professional advice.
        Review each suggestion and use your own judgement; for matters of
        worship and fiqh, consult a qualified scholar. Please do not enter
        personal or sensitive information in goal text.
      </p>
    ),
  },
  {
    id: 'circles',
    title: 'Circles and other people',
    body: (
      <>
        <p>
          Circles are for mutual encouragement. When you join a circle, its
          members can see your name and the circle&apos;s shared tasks and progress.
          Only invite people you know who would expect to hear from you, and
          treat everyone with adab.
        </p>
        <p>
          We are not responsible for the conduct of other users, but we may
          remove content or accounts that break these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>break any law, or help anyone else do so, through the Service;</li>
          <li>harass, abuse, threaten or impersonate anyone;</li>
          <li>send spam or unwanted invites;</li>
          <li>post content that is hateful, obscene or infringes others&apos; rights;</li>
          <li>
            try to access accounts or data that are not yours, probe or disrupt
            our systems, or reverse engineer the App except where the law allows;
          </li>
          <li>use bots or automated means to access the Service without our permission.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'content',
    title: 'Your content',
    body: (
      <p>
        You own the tasks, goals, reflections and other content you create. You
        give us a limited, worldwide, non-exclusive licence to host, store,
        process and display that content only as needed to run the Service for
        you, including showing circle content to the members of that circle.
        This licence ends when you delete the content or your account, except
        for residual backups described in our Privacy Policy.
      </p>
    ),
  },
  {
    id: 'ours',
    title: 'Our intellectual property',
    body: (
      <p>
        The Service, including the Rifaaq name, logo, illustrations, design and
        software, belongs to us or our licensors. We give you a personal,
        revocable, non-transferable licence to use the App on devices you own
        or control, for your own non-commercial use, in line with these Terms.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Ending your use',
    body: (
      <p>
        You can stop using Rifaaq and delete your account at any time; see{' '}
        <Link href={routes.accountDeletion}>Account deletion</Link>. We may
        suspend or close accounts that seriously or repeatedly break these
        Terms, or where required by law. Where reasonable, we will tell you
        why.
      </p>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: (
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the
        fullest extent the law allows, we disclaim all warranties, express or
        implied, including fitness for a particular purpose and
        non-infringement. Rifaaq is a tool to support your own efforts; it
        does not replace your personal responsibility for your worship,
        health or decisions.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p>
        To the fullest extent the law allows, we are not liable for indirect,
        incidental, special or consequential losses, or for loss of data,
        profits or goodwill, arising from your use of the Service. Nothing in
        these Terms limits liability that cannot be limited by law, including
        your rights as a consumer.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These Terms are governed by the laws of {site.jurisdiction}. We will try
        to resolve any dispute informally first, so please contact us at{' '}
        <ContactEmail />. If we cannot, the courts of {site.jurisdiction} will
        have jurisdiction, without affecting any mandatory rights you have
        where you live.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these Terms',
    body: (
      <p>
        We may update these Terms. We will post the new version here with a new
        date and, for material changes, notify you in the App or by email before
        they take effect. Continuing to use Rifaaq after that means you accept
        the updated Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
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

const Terms = () => (
  <LegalPage
    title="Terms of Service"
    intro={
      <p>
        Please read these Terms carefully. They explain what you can expect
        from us and what we ask of you when you use Rifaaq.
      </p>
    }
    sections={sections}
  />
)

export default Terms
