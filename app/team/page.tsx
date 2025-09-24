import { Metadata } from 'next'
import TeamHero from '@/components/team/TeamHero'
import TeamMembers from '@/components/team/TeamMembers'
import AssociateNetwork from '@/components/team/AssociateNetwork'
// import JoinTeam from '@/components/team/JoinTeam'

export const metadata: Metadata = {
  title: 'Our Team - Metrics2Impact',
  description: 'Meet our expert team of M&E professionals, gender specialists, and development experts with World Bank experience.',
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
      <AssociateNetwork />
    </>
  )
}
