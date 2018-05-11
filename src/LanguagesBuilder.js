import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Help } from "./Icons";

class LanguagesBuilder extends Component {
  getLanguageOptions() {
    return [
      "🏳️",
      "🇦🇫 Afghanistan",
      "🇦🇽 Åland Islands",
      "🇦🇱 Albania",
      "🇩🇿 Algeria",
      "🇦🇸 American Samoa",
      "🇦🇩 Andorra",
      "🇦🇴 Angola",
      "🇦🇮 Anguilla",
      "🇦🇶 Antarctica",
      "🇦🇬 Antigua & Barbuda",
      "🇦🇷 Argentina",
      "🇦🇲 Armenia",
      "🇦🇼 Aruba",
      "🇦🇨 Ascension Island",
      "🇦🇺 Australia",
      "🇦🇹 Austria",
      "🇦🇿 Azerbaijan",
      "🇧🇸 Bahamas",
      "🇧🇭 Bahrain",
      "🇧🇩 Bangladesh",
      "🇧🇧 Barbados",
      "🇧🇾 Belarus",
      "🇧🇪 Belgium",
      "🇧🇿 Belize",
      "🇧🇯 Benin",
      "🇧🇲 Bermuda",
      "🇧🇹 Bhutan",
      "🇧🇴 Bolivia",
      "🇧🇦 Bosnia & Herzegovina",
      "🇧🇼 Botswana",
      "🇧🇻 Bouvet Island",
      "🇧🇷 Brazil",
      "🇮🇴 British Indian Ocean Territory",
      "🇻🇬 British Virgin Islands",
      "🇧🇳 Brunei",
      "🇧🇬 Bulgaria",
      "🇧🇫 Burkina Faso",
      "🇧🇮 Burundi",
      "🇰🇭 Cambodia",
      "🇨🇲 Cameroon",
      "🇨🇦 Canada",
      "🇮🇨 Canary Islands",
      "🇨🇻 Cape Verde",
      "🇧🇶 Caribbean Netherlands",
      "🇰🇾 Cayman Islands",
      "🇨🇫 Central African Republic",
      "🇪🇦 Ceuta & Melilla",
      "🇹🇩 Chad",
      "🇨🇱 Chile",
      "🇨🇳 China",
      "🇨🇽 Christmas Island",
      "🇨🇵 Clipperton Island",
      "🇨🇨 Cocos (Keeling) Islands",
      "🇨🇴 Colombia",
      "🇰🇲 Comoros",
      "🇨🇬 Congo - Brazzaville",
      "🇨🇩 Congo - Kinshasa",
      "🇨🇰 Cook Islands",
      "🇨🇷 Costa Rica",
      "🇨🇮 Côte D’Ivoire",
      "🇭🇷 Croatia",
      "🇨🇺 Cuba",
      "🇨🇼 Curaçao",
      "🇨🇾 Cyprus",
      "🇨🇿 Czechia",
      "🇩🇰 Denmark",
      "🇩🇬 Diego Garcia",
      "🇩🇯 Djibouti",
      "🇩🇲 Dominica",
      "🇩🇴 Dominican Republic",
      "🇪🇨 Ecuador",
      "🇪🇬 Egypt",
      "🇸🇻 El Salvador",
      "🇬🇶 Equatorial Guinea",
      "🇪🇷 Eritrea",
      "🇪🇪 Estonia",
      "🇪🇹 Ethiopia",
      "🇪🇺 European Union",
      "🇫🇰 Falkland Islands",
      "🇫🇴 Faroe Islands",
      "🇫🇯 Fiji",
      "🇫🇮 Finland",
      "🇫🇷 France",
      "🇬🇫 French Guiana",
      "🇵🇫 French Polynesia",
      "🇹🇫 French Southern Territories",
      "🇬🇦 Gabon",
      "🇬🇲 Gambia",
      "🇬🇪 Georgia",
      "🇩🇪 Germany",
      "🇬🇭 Ghana",
      "🇬🇮 Gibraltar",
      "🇬🇷 Greece",
      "🇬🇱 Greenland",
      "🇬🇩 Grenada",
      "🇬🇵 Guadeloupe",
      "🇬🇺 Guam",
      "🇬🇹 Guatemala",
      "🇬🇬 Guernsey",
      "🇬🇳 Guinea",
      "🇬🇼 Guinea-Bissau",
      "🇬🇾 Guyana",
      "🇭🇹 Haiti",
      "🇭🇲 Heard & McDonald Islands",
      "🇭🇳 Honduras",
      "🇭🇰 Hong Kong SAR China",
      "🇭🇺 Hungary",
      "🇮🇸 Iceland",
      "🇮🇳 India",
      "🇮🇩 Indonesia",
      "🇮🇷 Iran",
      "🇮🇶 Iraq",
      "🇮🇪 Ireland",
      "🇮🇲 Isle of Man",
      "🇮🇱 Israel",
      "🇮🇹 Italy",
      "🇯🇲 Jamaica",
      "🇯🇵 Japan",
      "🇯🇪 Jersey",
      "🇯🇴 Jordan",
      "🇰🇿 Kazakhstan",
      "🇰🇪 Kenya",
      "🇰🇮 Kiribati",
      "🇽🇰 Kosovo",
      "🇰🇼 Kuwait",
      "🇰🇬 Kyrgyzstan",
      "🇱🇦 Laos",
      "🇱🇻 Latvia",
      "🇱🇧 Lebanon",
      "🇱🇸 Lesotho",
      "🇱🇷 Liberia",
      "🇱🇾 Libya",
      "🇱🇮 Liechtenstein",
      "🇱🇹 Lithuania",
      "🇱🇺 Luxembourg",
      "🇲🇴 Macau SAR China",
      "🇲🇰 Macedonia",
      "🇲🇬 Madagascar",
      "🇲🇼 Malawi",
      "🇲🇾 Malaysia",
      "🇲🇻 Maldives",
      "🇲🇱 Mali",
      "🇲🇹 Malta",
      "🇲🇭 Marshall Islands",
      "🇲🇶 Martinique",
      "🇲🇷 Mauritania",
      "🇲🇺 Mauritius",
      "🇾🇹 Mayotte",
      "🇲🇽 Mexico",
      "🇫🇲 Micronesia",
      "🇲🇩 Moldova",
      "🇲🇨 Monaco",
      "🇲🇳 Mongolia",
      "🇲🇪 Montenegro",
      "🇲🇸 Montserrat",
      "🇲🇦 Morocco",
      "🇲🇿 Mozambique",
      "🇲🇲 Myanmar (Burma)",
      "🇳🇦 Namibia",
      "🇳🇷 Nauru",
      "🇳🇵 Nepal",
      "🇳🇱 Netherlands",
      "🇳🇨 New Caledonia",
      "🇳🇿 New Zealand",
      "🇳🇮 Nicaragua",
      "🇳🇪 Niger",
      "🇳🇬 Nigeria",
      "🇳🇺 Niue",
      "🇳🇫 Norfolk Island",
      "🇰🇵 North Korea",
      "🇲🇵 Northern Mariana Islands",
      "🇳🇴 Norway",
      "🇴🇲 Oman",
      "🇵🇰 Pakistan",
      "🇵🇼 Palau",
      "🇵🇸 Palestinian Territories",
      "🇵🇦 Panama",
      "🇵🇬 Papua New Guinea",
      "🇵🇾 Paraguay",
      "🇵🇪 Peru",
      "🇵🇭 Philippines",
      "🇵🇳 Pitcairn Islands",
      "🇵🇱 Poland",
      "🇵🇹 Portugal",
      "🇵🇷 Puerto Rico",
      "🇶🇦 Qatar",
      "🇷🇴 Romania",
      "🇷🇺 Russia",
      "🇷🇼 Rwanda",
      "🇷🇪 Réunion",
      "🇼🇸 Samoa",
      "🇸🇲 San Marino",
      "🇸🇦 Saudi Arabia",
      "🇸🇳 Senegal",
      "🇷🇸 Serbia",
      "🇸🇨 Seychelles",
      "🇸🇱 Sierra Leone",
      "🇸🇬 Singapore",
      "🇸🇽 Sint Maarten",
      "🇸🇰 Slovakia",
      "🇸🇮 Slovenia",
      "🇸🇧 Solomon Islands",
      "🇸🇴 Somalia",
      "🇿🇦 South Africa",
      "🇬🇸 South Georgia & South Sandwich Islands",
      "🇰🇷 South Korea",
      "🇸🇸 South Sudan",
      "🇪🇸 Spain",
      "🇱🇰 Sri Lanka",
      "🇧🇱 St. Barthélemy",
      "🇸🇭 St. Helena",
      "🇰🇳 St. Kitts & Nevis",
      "🇱🇨 St. Lucia",
      "🇲🇫 St. Martin",
      "🇵🇲 St. Pierre & Miquelon",
      "🇻🇨 St. Vincent & Grenadines",
      "🇸🇩 Sudan",
      "🇸🇷 Suriname",
      "🇸🇯 Svalbard & Jan Mayen",
      "🇸🇿 Swaziland",
      "🇸🇪 Sweden",
      "🇨🇭 Switzerland",
      "🇸🇾 Syria",
      "🇸🇹 São Tomé & Príncipe",
      "🇹🇼 Taiwan",
      "🇹🇯 Tajikistan",
      "🇹🇿 Tanzania",
      "🇹🇭 Thailand",
      "🇹🇱 Timor-Leste",
      "🇹🇬 Togo",
      "🇹🇰 Tokelau",
      "🇹🇴 Tonga",
      "🇹🇹 Trinidad & Tobago",
      "🇹🇦 Tristan Da Cunha",
      "🇹🇳 Tunisia",
      "🇹🇷 Turkey",
      "🇹🇲 Turkmenistan",
      "🇹🇨 Turks & Caicos Islands",
      "🇹🇻 Tuvalu",
      "🇻🇮 U.S. Virgin Islands",
      "🇺🇬 Uganda",
      "🇺🇦 Ukraine",
      "🇦🇪 United Arab Emirates",
      "🇬🇧 United Kingdom",
      "🇺🇸 United States",
      "🇺🇾 Uruguay",
      "🇺🇿 Uzbekistan",
      "🇻🇺 Vanuatu",
      "🇻🇦 Vatican City",
      "🇻🇪 Venezuela",
      "🇻🇳 Vietnam",
      "🇼🇫 Wallis & Futuna",
      "🇪🇭 Western Sahara",
      "🇾🇪 Yemen",
      "🇿🇲 Zambia",
      "🇿🇼 Zimbabwe",
    ];
  }

  render() {
    const { helpUrl, value, onNameChange, onIconChange } = this.props;
    
    return (
      <div className="relative w-3/4 mx-auto rounded-lg bg-blue-lightest p-6 mb-6 overflow-hidden">
        <Link
          to={helpUrl}
          className="absolute block pin-t pin-r m-2 p-2 text-inherit"
        >
          <Help />
        </Link>

        <h4 className="text-lg italic text-center mb-4 tracking-none">
          What languages do you speak?
        </h4>

        {[0, 1, 2].map(index => {
          let placeholder;
      
          if (index === 0) placeholder = "1st language…  (e.g. Portuguese)";
          if (index === 1) placeholder = "Optional: 2nd language…";
          if (index === 2) placeholder = "Optional: 3rd language…";
    
          const language = value[index] || { name: "", icon: '🏳️' };

          return (
            <div key={index} className="flex">
              <input
                type="text"
                onChange={e => onNameChange(index, e.target.value)}
                value={language.name}
                className="flex-1 border-2 px-3 py-2 h-10 rounded m-1"
                placeholder={placeholder}
              />

              <select
                className="block border-2 h-10 bg-transparent rounded text-2xl text-center m-1 ml-2"
                style={{ width: "4rem" }}
                onChange={e => onIconChange(index, e.target.value)}
                value={language.icon}
              >
                {this.getLanguageOptions().map(option => (
                  <option key={option} value={option.split(" ")[0]}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LanguagesBuilder;
