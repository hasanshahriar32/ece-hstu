"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin } from "lucide-react"

// Mock data for ESL
const eslData = {
  currentSeason: "2023-2024",
  sport: "Cricket",
  description: `The ECE Super League (ESL) is the premier cricket tournament organized by the ECE Club. It features teams from different batches competing in a T20 format cricket tournament.
  
  The tournament aims to foster sportsmanship, teamwork, and healthy competition among students from different batches of the ECE department. It provides a platform for students to showcase their cricketing talents and build camaraderie across batches.
  
  The ESL follows a round-robin format followed by knockout stages. Each team plays against every other team in the league stage, with the top teams advancing to the semi-finals and finals.`,
  nextMatch: {
    id: "match-12",
    team1: {
      name: "ECE Thunders",
      batch: "2019",
      logo: "/placeholder.svg?height=100&width=100",
    },
    team2: {
      name: "ECE Strikers",
      batch: "2020",
      logo: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-12-18",
    time: "2:00 PM",
    venue: "University Cricket Ground",
  },
  lastMatch: {
    id: "match-11",
    team1: {
      name: "ECE Warriors",
      batch: "2018",
      logo: "/placeholder.svg?height=100&width=100",
      score: "156/7",
    },
    team2: {
      name: "ECE Thunders",
      batch: "2019",
      logo: "/placeholder.svg?height=100&width=100",
      score: "157/4",
    },
    result: "ECE Thunders won by 6 wickets",
    motm: "Md. Rakibul Hasan (ECE Thunders)",
    date: "2023-12-15",
  },
  standings: [
    {
      position: 1,
      team: "ECE Thunders",
      batch: "2019",
      played: 4,
      won: 3,
      lost: 1,
      points: 6,
      nrr: "+1.256",
    },
    {
      position: 2,
      team: "ECE Warriors",
      batch: "2018",
      played: 4,
      won: 3,
      lost: 1,
      points: 6,
      nrr: "+0.875",
    },
    {
      position: 3,
      team: "ECE Strikers",
      batch: "2020",
      played: 4,
      won: 2,
      lost: 2,
      points: 4,
      nrr: "+0.125",
    },
    {
      position: 4,
      team: "ECE Titans",
      batch: "2021",
      played: 4,
      won: 0,
      lost: 4,
      points: 0,
      nrr: "-1.458",
    },
  ],
  recentMatches: [
    {
      id: "match-11",
      team1: {
        name: "ECE Warriors",
        batch: "2018",
        score: "156/7",
      },
      team2: {
        name: "ECE Thunders",
        batch: "2019",
        score: "157/4",
      },
      result: "ECE Thunders won by 6 wickets",
      date: "2023-12-15",
    },
    {
      id: "match-10",
      team1: {
        name: "ECE Strikers",
        batch: "2020",
        score: "142/8",
      },
      team2: {
        name: "ECE Titans",
        batch: "2021",
        score: "138/9",
      },
      result: "ECE Strikers won by 4 runs",
      date: "2023-12-12",
    },
    {
      id: "match-9",
      team1: {
        name: "ECE Thunders",
        batch: "2019",
        score: "165/5",
      },
      team2: {
        name: "ECE Titans",
        batch: "2021",
        score: "120/10",
      },
      result: "ECE Thunders won by 45 runs",
      date: "2023-12-08",
    },
  ],
  teams: [
    {
      id: "ece-thunders",
      name: "ECE Thunders",
      batch: "2019",
      logo: "/placeholder.svg?height=100&width=100",
      captain: "Md. Rakibul Hasan",
      viceCaptain: "Nusrat Jahan",
      players: 15,
    },
    {
      id: "ece-warriors",
      name: "ECE Warriors",
      batch: "2018",
      logo: "/placeholder.svg?height=100&width=100",
      captain: "Md. Kamal Hossain",
      viceCaptain: "Sabrina Akter",
      players: 15,
    },
    {
      id: "ece-strikers",
      name: "ECE Strikers",
      batch: "2020",
      logo: "/placeholder.svg?height=100&width=100",
      captain: "Tanvir Ahmed",
      viceCaptain: "Fatema Khatun",
      players: 15,
    },
    {
      id: "ece-titans",
      name: "ECE Titans",
      batch: "2021",
      logo: "/placeholder.svg?height=100&width=100",
      captain: "Arif Hossain",
      viceCaptain: "Mim Akter",
      players: 15,
    },
  ],
  fixtures: [
    {
      id: "match-1",
      team1: "ECE Warriors",
      team2: "ECE Strikers",
      date: "2023-11-10",
      result: "ECE Warriors won by 25 runs",
    },
    {
      id: "match-2",
      team1: "ECE Thunders",
      team2: "ECE Titans",
      date: "2023-11-12",
      result: "ECE Thunders won by 8 wickets",
    },
    {
      id: "match-3",
      team1: "ECE Warriors",
      team2: "ECE Titans",
      date: "2023-11-15",
      result: "ECE Warriors won by 45 runs",
    },
    {
      id: "match-4",
      team1: "ECE Thunders",
      team2: "ECE Strikers",
      date: "2023-11-18",
      result: "ECE Strikers won by 15 runs",
    },
    {
      id: "match-5",
      team1: "ECE Strikers",
      team2: "ECE Titans",
      date: "2023-11-22",
      result: "ECE Strikers won by 6 wickets",
    },
    {
      id: "match-6",
      team1: "ECE Warriors",
      team2: "ECE Thunders",
      date: "2023-11-25",
      result: "ECE Warriors won by 20 runs",
    },
    {
      id: "match-7",
      team1: "ECE Warriors",
      team2: "ECE Strikers",
      date: "2023-12-01",
      result: "ECE Warriors won by 30 runs",
    },
    {
      id: "match-8",
      team1: "ECE Titans",
      team2: "ECE Warriors",
      date: "2023-12-05",
      result: "ECE Warriors won by 7 wickets",
    },
    {
      id: "match-9",
      team1: "ECE Thunders",
      team2: "ECE Titans",
      date: "2023-12-08",
      result: "ECE Thunders won by 45 runs",
    },
    {
      id: "match-10",
      team1: "ECE Strikers",
      team2: "ECE Titans",
      date: "2023-12-12",
      result: "ECE Strikers won by 4 runs",
    },
    {
      id: "match-11",
      team1: "ECE Warriors",
      team2: "ECE Thunders",
      date: "2023-12-15",
      result: "ECE Thunders won by 6 wickets",
    },
    {
      id: "match-12",
      team1: "ECE Thunders",
      team2: "ECE Strikers",
      date: "2023-12-18",
      result: "Upcoming",
    },
  ],
}

export default function ESLPage() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">ECE Super League</h1>
          <p className="text-xl text-muted-foreground">
            Season {eslData.currentSeason} • {eslData.sport}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>About ESL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{eslData.description}</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4">
                <h3 className="text-lg font-semibold">Next Match</h3>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <img
                        src={eslData.nextMatch.team1.logo || "/placeholder.svg"}
                        alt={eslData.nextMatch.team1.name}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-sm">{eslData.nextMatch.team1.name}</h4>
                  </div>

                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">VS</div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <img
                        src={eslData.nextMatch.team2.logo || "/placeholder.svg"}
                        alt={eslData.nextMatch.team2.name}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-sm">{eslData.nextMatch.team2.name}</h4>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formatDate(eslData.nextMatch.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{eslData.nextMatch.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{eslData.nextMatch.venue}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Button asChild size="sm" className="w-full">
                    <Link href={`/esl/matches/${eslData.nextMatch.id}`}>Match Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="standings" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="standings">Standings</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="standings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>League Standings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left font-medium p-2">#</th>
                        <th className="text-left font-medium p-2">Team</th>
                        <th className="text-center font-medium p-2">Played</th>
                        <th className="text-center font-medium p-2">Won</th>
                        <th className="text-center font-medium p-2">Lost</th>
                        <th className="text-center font-medium p-2">Points</th>
                        <th className="text-center font-medium p-2">NRR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eslData.standings.map((team) => (
                        <tr key={team.position} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="p-2">{team.position}</td>
                          <td className="p-2">
                            <div>
                              <div className="font-medium">{team.team}</div>
                              <div className="text-xs text-muted-foreground">Batch {team.batch}</div>
                            </div>
                          </td>
                          <td className="text-center p-2">{team.played}</td>
                          <td className="text-center p-2">{team.won}</td>
                          <td className="text-center p-2">{team.lost}</td>
                          <td className="text-center font-bold p-2">{team.points}</td>
                          <td className="text-center p-2">{team.nrr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eslData.teams.map((team) => (
                <Card key={team.id} className="overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-24 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                      <img src={team.logo || "/placeholder.svg"} alt={team.name} className="h-16 w-16 object-contain" />
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg">{team.name}</h3>
                      <p className="text-sm text-muted-foreground">Batch {team.batch}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Captain:</span>
                        <span className="font-medium">{team.captain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vice Captain:</span>
                        <span className="font-medium">{team.viceCaptain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Squad Size:</span>
                        <span className="font-medium">{team.players} players</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t">
                    <Button asChild variant="ghost" size="sm" className="w-full">
                      <Link href={`/esl/teams/${team.id}`}>View Team</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fixtures" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Match Fixtures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {eslData.fixtures.map((match) => (
                    <div
                      key={match.id}
                      className="flex flex-col md:flex-row md:items-center justify-between border-b last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex-1">
                        <div className="font-medium">
                          {match.team1} vs {match.team2}
                        </div>
                        <div className="text-sm text-muted-foreground">{formatDate(match.date)}</div>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center gap-4">
                        {match.result === "Upcoming" ? (
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            Upcoming
                          </Badge>
                        ) : (
                          <div className="text-sm">{match.result}</div>
                        )}
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/esl/matches/${match.id}`}>Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Match Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {eslData.fixtures
                    .filter((match) => match.result !== "Upcoming")
                    .reverse()
                    .map((match) => (
                      <div
                        key={match.id}
                        className="flex flex-col md:flex-row md:items-center justify-between border-b last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex-1">
                          <div className="font-medium">
                            {match.team1} vs {match.team2}
                          </div>
                          <div className="text-sm text-muted-foreground">{formatDate(match.date)}</div>
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center gap-4">
                          <div className="text-sm">{match.result}</div>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/esl/matches/${match.id}`}>Scorecard</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">ESL Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-video rounded-md overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`ESL Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button asChild>
            <Link href="/gallery?category=esl">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

