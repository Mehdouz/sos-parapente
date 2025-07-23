"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Shield, Users, Zap, Star, Facebook, Instagram} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-xl">S.O.S</div>
          <span className="text-2xl font-bold text-gray-800">PARAPENTE</span>
        </div>
        <Button
          className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contactez-moi
        </Button>
      </div>
    </header>

    {/* Hero Section */}
    <section className="bg-gradient-to-br from-red-500 to-red-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Service Professionnel de Récupération de Voiles</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
        Grimpeur arboricoles expert, spécialisé dans la récupération sécurisée de voiles de parapente coincées dans les arbres.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-white text-red-500 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Avoir de l'aide maintenant
          </Button>
          <div className="flex items-center space-x-2 text-lg">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">+336.27.24.71.93</span>
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <Image
            src="/mathis_sos_parapente.jpg"
            alt="Service Professionnel de Récupération de Voiles"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi choisir SOS Parapente?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une expertise professionnelle en grimpe d’arbres alliée à une connaissance approfondie du matériel de parapente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intervention Rapide</h3>
              <p className="text-gray-600">
              Une intervention rapide pour minimiser les dommages à votre matériel et vous remettre en vol au plus vite.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sécurité & Professionnalisme</h3>
              <p className="text-gray-600">
              Élagueur certifié équipé de matériel d’escalade spécialisé et suivant des protocoles de sécurité stricts.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert en Parapente</h3>
              <p className="text-gray-600">
              Une connaissance approfondie de la construction des voiles et des techniques de manipulation adaptées.</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Disponibilité 24h/24 et 7j/7</h3>
              <p className="text-gray-600">
              Un service d’urgence disponible à toute heure pour les récupérations urgentes.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ce Que Disent Nos Clients</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
              "J'ai appelé le frère, il a répondu instant ce qui fait plutôt plaisir quand on est perché avec sa voile. Bon il m'a quand meme bien charger stenfoiré et c'est même permis de me tailler parceque je m'étais pris une frontale! Je recommande quand même parcequ'il m'a dépanne d'un 10e aprés"</p>
              <div className="font-semibold text-gray-800">- Pierre L., Annecy</div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Waw, j'ai jamais pensé qu'on pouvait monter un arbre aussi lentement. Même si j'ai pu en profiter pour mater son beau petit cul quand il était en haut de l'arbre. Je recommande."
              </p>
              <div className="font-semibold text-gray-800">- Marie C., Chamonix</div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Starfellah le frère arrive en Y avec un teh a la bouche à notre lieu de rdv. C'est un élagueur ou un bicraveur je comprend plus rien?"
              </p>
              <div className="font-semibold text-gray-800">- Hafid R., Grenoble</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Besoin de récupérer votre Voile ?</h2>
            <p className="text-xl text-gray-600">Contactez-nous immédiatement pour un service rapide et professionnel.
</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-red-500" />
                  <div>
                    <div className="font-semibold">Urgences</div>
                    <div className="text-gray-600">+336.27.24.71.93</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-red-500" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">contact@sosparapente.fr</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-500" />
                  <div>
                    <div className="font-semibold">Zone d'intervention</div>
                    <div className="text-gray-600">Alpes du nord & régions environnante</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-red-500" />
                  <div>
                    <div className="font-semibold">Disponibilité</div>
                    <div className="text-gray-600">24h/24 et 7j/7</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Récupération d’Urgence</h4>
                <p className="text-red-700">
                Pour une récupération immédiate de votre voile, appelez directement : <strong>+33 6 27 24 71 93</strong>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <Input placeholder="Votre téléphone" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="votre.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation de la voile</label>
                  <Input placeholder="Décrivez la localisation (ville, sommet, coordonnées GPS)" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <Textarea
                    placeholder="Décrivez la situation: taille de l'arbre, état de la voile, niveau d'urgence, etc."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3">Envoyer ma demande</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-lg">S.O.S</div>
              <span className="text-xl font-bold">PARAPENTE</span>
            </div>
            <p className="text-gray-400">
            Service professionnel de récupération de voiles de parapente assuré par Mathis, élagueur certifié.
            </p>
          </div>





          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
            <div className="text-gray-400">
              <div className="font-semibold text-white">Urgence: +336.27.24.71.93</div>
              <div>Mathis, élagueur et grimpeur</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SOS Parapente. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
  );
}
