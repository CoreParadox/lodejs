export module Worlds{
    export enum Elemental {
        Aegis = "Aegis",
        Atomos = "Atomos",
        Carbuncle = "Carbuncle",
        Garuda = "Garuda",
        Gungnir = "Gungnir",
        Kujata = "Kujata",
        Ramuh = "Ramuh",
        Tonberry = "Tonberry",
        Typhon = "Typhon",
        Unicorn = "Unicorn"
    }

    export enum Gaia {
        Alexander = "Alexander",	
        Bahamut = "Bahamut",	
        Durandal = "Durandal",	
        Fenrir = "Fenrir",	
        Ifrit = "Ifrit",	
        Ridill = "Ridill",	
        Tiamat = "Tiamat",	
        Ultima = "Ultima",	
        Valefor = "Valefor",	
        Yojimbo = "Yojimbo",	
        Zeromus = "Zeromus"		
    }

    export enum Mana {
        Anima = "Anima",	
        Asura = "Asura",	
        Belias = "Belias",	
        Chocobo = "Chocobo",	
        Hades = "Hades",	
        Ixion = "Ixion",	
        Mandragora = "Mandragora",	
        Masamune = "Masamune",	
        Pandaemonium = "Pandaemonium",	
        Shinryu = "Shinryu",	
        Titan = "Titan"	
    }

    export enum Aether {
        Adamantoise = "Adamantoise",	
        Balmung = "Balmung",	
        Cactuar = "Cactuar",	
        Coeurl = "Coeurl",	
        Faerie = "Faerie",	
        Gilgamesh = "Gilgamesh",	
        Goblin = "Goblin",	
        Jenova = "Jenova",	
        Mateus = "Mateus",	
        Midgardsormr = "Midgardsormr",	
        Sargatanas = "Sargatanas",	
        Siren = "Siren",	
        Zalera = "Zalera"
    }

    export enum Primal {
        Behemoth = "Behemoth",	
        Brynhildr = "Brynhildr",	
        Diabolos = "Diabolos",	
        Excalibur = "Excalibur",	
        Exodus = "Exodus",	
        Famfrit = "Famfrit",	
        Hyperion = "Hyperion",	
        Lamia = "Lamia",	
        Leviathan = "Leviathan",	
        Malboro = "Malboro",	
        Ultros = "Ultros"	
    }
    export enum Chaos {
        Cerberus = "Cerberus",	
        Lich = "Lich",	
        Louisoix = "Louisoix",	
        Moogle = "Moogle",	
        Odin = "Odin",	
        Omega = "Omega",	
        Phoenix = "Phoenix",	
        Ragnarok = "Ragnarok",	
        Shiva = "Shiva",	
        Zodiark = "Zodiark"
    }

    export const AllWorlds = Object.values(Chaos).concat(Object.values(Primal),Object.values(Aether),Object.values(Mana),Object.values(Gaia),Object.values(Elemental));
}