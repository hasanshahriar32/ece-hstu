"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react"

// Mock data for ESL
const eslData = {
  currentSeason: "2023-2024",
  sport: "Cricket",
  description:
    "The ECE Super League (ESL) is the premier cricket tournament organized by the ECE Club. It features teams from different batches competing in a T20 format cricket tournament.",
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
}

export function ESLSection() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">ECE Super League</h2>
          <p className="text-muted-foreground">
            Season {eslData.currentSeason} • {eslData.sport}
          </p>
        </div>
        <Button asChild>
          <Link href="/esl">
            View Full Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
              <h3 className="text-xl font-semibold mb-2">Next Match</h3>
              <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(eslData.nextMatch.date)}</span>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>{eslData.nextMatch.time}</span>
                <span>•</span>
                <MapPin className="h-4 w-4" />
                <span>{eslData.nextMatch.venue}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <img
                      src={eslData.nextMatch.team1.logo || "/placeholder.svg"}
                      alt={eslData.nextMatch.team1.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold">{eslData.nextMatch.team1.name}</h4>
                  <p className="text-sm text-muted-foreground">Batch {eslData.nextMatch.team1.batch}</p>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">VS</div>
                  <Button asChild size="sm">
                    <Link href={`/esl/matches/${eslData.nextMatch.id}`}>Match Details</Link>
                  </Button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <img
                      src={eslData.nextMatch.team2.logo || "/placeholder.svg"}
                      alt={eslData.nextMatch.team2.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold">{eslData.nextMatch.team2.name}</h4>
                  <p className="text-sm text-muted-foreground">Batch {eslData.nextMatch.team2.batch}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Last Match Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <img
                        src={eslData.lastMatch.team1.logo || "/placeholder.svg"}
                        alt={eslData.lastMatch.team1.name}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h4 className="font-semibold">{eslData.lastMatch.team1.name}</h4>
                    <p className="text-sm text-muted-foreground">Batch {eslData.lastMatch.team1.batch}</p>
                    <p className="text-lg font-bold mt-2">{eslData.lastMatch.team1.score}</p>
                  </div>

                  <div className="text-center">
                    <div className="text-xl font-bold mb-2">VS</div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                      <img
                        src={eslData.lastMatch.team2.logo || "/placeholder.svg"}
                        alt={eslData.lastMatch.team2.name}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h4 className="font-semibold">{eslData.lastMatch.team2.name}</h4>
                    <p className="text-sm text-muted-foreground">Batch {eslData.lastMatch.team2.batch}</p>
                    <p className="text-lg font-bold mt-2">{eslData.lastMatch.team2.score}</p>
                  </div>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="font-medium text-lg">{eslData.lastMatch.result}</p>
                  <p className="text-sm text-muted-foreground mt-1">Man of the Match: {eslData.lastMatch.motm}</p>
                  <p className="text-sm text-muted-foreground mt-1">{formatDate(eslData.lastMatch.date)}</p>
                </div>

                <div className="flex justify-center pt-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/esl/matches/${eslData.lastMatch.id}`}>View Scorecard</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Tabs defaultValue="standings">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="standings">Standings</TabsTrigger>
              <TabsTrigger value="recent">Recent Matches</TabsTrigger>
            </TabsList>
            <TabsContent value="standings" className="mt-4">
              <Card>
                <CardContent className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left font-medium p-2">#</th>
                          <th className="text-left font-medium p-2">Team</th>
                          <th className="text-center font-medium p-2">P</th>
                          <th className="text-center font-medium p-2">W</th>
                          <th className="text-center font-medium p-2">L</th>
                          <th className="text-center font-medium p-2">Pts</th>
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
                <CardFooter className="border-t px-4 py-2">
                  <Button asChild variant="ghost" size="sm" className="ml-auto">
                    <Link href="/esl/standings">View Full Standings</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="recent" className="mt-4">
              <Card>
                <CardContent className="p-4 space-y-4">
                  {eslData.recentMatches.map((match, index) => (
                    <div
                      key={match.id}
                      className={`pb-4 ${index < eslData.recentMatches.length - 1 ? "border-b" : ""}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <div className="font-medium">{match.team1.name}</div>
                          <div className="text-sm">{match.team1.score}</div>
                        </div>
                        <div className="text-xs px-2">vs</div>
                        <div className="text-right">
                          <div className="font-medium">{match.team2.name}</div>
                          <div className="text-sm">{match.team2.score}</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="text-muted-foreground">{formatDate(match.date)}</div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/esl/matches/${match.id}`}>Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="border-t px-4 py-2">
                  <Button asChild variant="ghost" size="sm" className="ml-auto">
                    <Link href="/esl/matches">View All Matches</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>About ESL</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{eslData.description}</p>
              <div className="flex justify-center mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/esl/teams">View Teams</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

