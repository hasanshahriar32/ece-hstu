import { HeroSection } from '@/components/hero-section'
import { ChairmanMessage } from '@/components/chairman-message'
import { VisionMission } from '@/components/vision-mission'
import { CommitteeMembers } from '@/components/committee-members'
import { UpcomingEvents } from '@/components/upcoming-events'
import { WorkshopSection } from '@/components/workshop-section'
import { EventsSection } from '@/components/events-section'
import { FeaturedEvents } from '@/components/featured-events'
import { ESLSection } from '@/components/esl-section'
import { DeveloperCard } from '@/components/developer-card'
import { AlumniSpotlight } from '@/components/alumni-spotlight'
import { FacultySpotlight } from '@/components/faculty-spotlight'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Remove the py-8 from the container div */}
      <HeroSection />
      <div className="pt-8">
        <ChairmanMessage />
        <FacultySpotlight />
        <div className="mt-16">
          <VisionMission />
        </div>
        <div className="mt-16">
          <CommitteeMembers />
        </div>
        <div className="mt-16">
          <UpcomingEvents />
        </div>
        <div className="mt-16">
          <WorkshopSection />
        </div>
        <div className="mt-16">
          <EventsSection />
        </div>
        <div className="mt-16">
          <FeaturedEvents />
        </div>
        <div className="mt-16">
          <AlumniSpotlight />
        </div>
        <div className="mt-16">
          <ESLSection />
        </div>
        <div className="mt-16">
          <DeveloperCard />
        </div>
      </div>
    </div>
  )
}
