export module RegexStatements{

    export const Character = {
        WorldName:/<p class="frame__chara__world">(\w+)<\/p>/,
        Title: /<p class="frame__chara__title">(\w+)<\/p>/,
        FirstName: /<p class="frame__chara__name">(\w+)\s\w+<\/p>/,
        LastName: /<p class="frame__chara__name">\w+(\s\w+)<\/p>/,
        Race: /<p class="character-block__title">Race\/Clan\/Gender<\/p>\s*<p class="character-block__name">([^<]+)<br \/>/,
        Clan: /<p class="character-block__title">Race\/Clan\/Gender<\/p>\s*<p class="character-block__name">[^<]+<br \/>(\w+)/,
        Gender: /<p class="character-block__title">Race\/Clan\/Gender<\/p>\s*<p class="character-block__name">[^<]+<br \/>\w+\s\/\s([♂♀])/,
        FreeCompany: /<h4><a href="[\w\/]+">([\w\s]+)<\/a>/,
        GrandCompany: /<p class="character-block__title">Grand Company<\/p>\s*<p class="character-block__name">([\w\s]+)[^<]+<\/p>/,
        GrandCompanyStanding: /<p class="character-block__title">Grand Company<\/p>\s*<p class="character-block__name">[\w\s]+\/([^<]+)+<\/p>/,
        Hometown: /<p class="character-block__title">City-state<\/p>\s+<p class="character-block__name">([^<]+)<\/p>/,
        Nameday: /<p class="character-block__title">Nameday<\/p>\s*<p class="character-block__birth">([^<]+)<\/p>/,
        Guardian: /<p class="character-block__title">Guardian<\/p>\s*<p class="character-block__name">([^<]+)<\/p>/,
        Classes: /<li><img .*data-tooltip="([\w\s\/]+)">(\d{1,2})<\/li>/,
        SelfIntroduction:/<div class="character__selfintroduction">([^<]+)<\/div>/,
        CurrentClass: /<div class="character__class_icon">\s*<img src="(.*\.png)" width="24" height="24" alt=""><\/div>/,
        Portrait: /<div class="character__detail__image">\s*<a href="([^"]+)" target="_blank">/,
        Headshot: /<div class="frame__chara__face">\s*<img src="([^"]+)" width="40" height="40" alt="">/
    }
    export const CharacterQuery = {
        Entry:/<a href="\/lodestone\/character\/(\d+)\/" class="entry__link">/
    }
}