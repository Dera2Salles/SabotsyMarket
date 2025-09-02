import { MountainIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <a className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6 text-green-600" />
            <span className="text-lg font-semibold">SabotsyMarket</span>
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Connecter les producteurs locaux aux consommateurs. Frais, local, et
            de saison.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="grid gap-1">
            <h4 className="font-semibold">Navigation</h4>
            <a className="hover:underline" href="#">
              Accueil
            </a>
            <a className="hover:underline" href="#">
              Produits
            </a>
            <a className="hover:underline" href="#">
              À Propos
            </a>
            <a className="hover:underline" href="#">
              Contact
            </a>
          </div>
          <div className="grid gap-1">
            <h4 className="font-semibold">Légal</h4>
            <a className="hover:underline" href="#">
              Conditions d'utilisation
            </a>
            <a className="hover:underline" href="#">
              Politique de confidentialité
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          {/* <div className="flex gap-4">
            <Button size="icon" variant="ghost">
              <MdTwitter className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <FacebookIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <InstagramIcon className="h-5 w-5" />
            </Button>
          </div> */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} LocalHarvest Hub. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
