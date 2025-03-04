import { Song } from "./types";

export const MOCK_SONGS: Song[] = [
  {
    id: 1,
    title: "Believer",
    artist: "IMAGINE DRAGON",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/2d92/628f/1a2c2082e121dccffbff4012da9be9e2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BNhHDxoFuNHXOQTcKzSRyqBn9G~zAQtMvIbIVsjieZZkh~IWeLj7x5-Nt9hu-zvMGufFpSGAsMQRb9mYX51mLFcBW5kl1WaI464SwlXw78I3FFzcWDxmnLc-6WONKR8noypEPLZH9-LdTD90~NjJi9MuGUcJoYc-lHrcZUW~HQ7aNLSxXFxOMhqbRHNhSDPpqCN6fui1zARB~UF5LlMxFt31jmHvmaKQf1eiPIj1sNfDaruC5ALofNivfOxzO2H-B~A~GOGPa1FnNHg54qmVAC6DSk8T6H~ukGMUuwGeqnR-fWVhxAkwe0ovT-ZxhhBHmOzNCv0fjySJN0lfCZCEEg__",
  },
  {
    id: 2,
    title: "Shortwave",
    artist: "RYAN LEIGHTON",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/8a6d/76a4/a3cdd79e3e73b75ab9177a5ff15f8c0c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TYd-FR-ZcsdSyBusNCxRX20llFwgjYAzlSkyiU1yBYaWY8rIg02qlmJxgsjolk7VR5qhDRik8SBagZWdJ46lKN1ftSIS1P065maVkfI6eHgRT5AEhDGZejOy2HVMmjBEXHKeKbVfR1bRFAOfgye-UKa6lyNw4pKlfoRFXWC0mAoPrNwdzLav8P6MVIaqDdodlPwLrlaXABYGi3lmx9-auUqSZ92grE8sr2boeaiXXabRvbEE6HLkybWJHldSK34DzWu5qyCdvlxse4C1zOYC1n85xQJR6LVYcMCQhmM4Bk4MwaIattp92uSFr5ICILuKWbKzcDwes1jSzCpxYbI7Kg__",
  },
  {
    id: 3,
    title: "Dream On",
    artist: "ROGER TERRY",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/e400/1bee/2f5ad29aa3c76a3cf2dea574d9043a77?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F3dpMFEXBPZS8zdYf7ixEoXxQk29nPUOU4~6St9QrtiO4Zhvn5l5qGUe2WFhqmeYqy~31uOUBiyhR~k3mP-nYEyWQJH2M2V1qTY0jM66gGAhqi-276TrRk53VcW6j6HQ6Lwc0mPpya-wnJOV5yaH~kji2gkXRZ7Qqpvc227STbcxShrsUZehtkjS6qJwS8PBXp4rAx3fqVJaVAjwtGaqyVTBk90UwQOrene7yYqx3ptb8Lu5HXVYptU8dvbFyVj9GWtm0N3pVBx8iDi0wpFdGPXLp8TRvU~H~Cb~k3BAKGCq~qNXzD8SdVaA7j84GeLOZx63oGeL7lNhgs0LeQ42qA__",
  },
  {
    id: 4,
    title: "Origins",
    artist: "IMAGINE DRAGON",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/7050/718d/3753eee02e0199c190d98546d5db3ab1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D0imTPfmiuSJoHm8ed5gKtjSneDQcM3oL91wjmvPRfpTlRIhTbtIhGGWui~hmSPQxqaoReN22FHbXPNJmfs-05f-gZd2YdK5UfrcAaDzmTBB7mbUZwwZ9TKP2vOAeGz3gPcdQA76Ffo8RJljMyMiZpXk2jL3Ht828nGoKvlyiOvEUy5mcN6BFxE-lIBxYRUUjt25-8XPU3y59GOjnoXLYTk-9BW9Ur5XeoLMw7a7M7jrH~KpRfMMcRAhGj0AKZPXI73t-85457N6XSVQTmvI52kWCrGPmD9BXaeolWTDaX9nbBZmfej8vj83agP-Fjec9yr~zup4xhdOgV-~TkwCaQ__",
  },
  {
    id: 5,
    title: "Shelter",
    artist: "PORTER ROBINSON",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/5ae4/be96/f41614f754665481c77c7592fc88ad9b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P2VdGJEF4EhAFyHEvaNJqZPqd2wJOdSZY7ywlECtj-F~LqhOnvousiEeqPQkQnn9c5Se6fKqGxQhGDf6lcQhfRji3hZOY2IpX5QttzOB3epkgHz9F6xFMGMtW7fE5efLhMH~DCdeu8scjXIaQCOGu0pHevWM3hp5sogIYR-gyEtEwaiDcn2XjkKnOWrRvmvlwxS5uP3NAe5EGYVu481ZYa7EguCJQli~9UHrtMbOe~c20c4XXww72nHwV1HYGu-35yUd1QY9w4hC0LbdLa8YI4481~uehXWxAvErfKNmNwiPtiGhvN2rV3FfLx8cVmXVayzotn3ZtRBsuwaIhFtLcg__",
  },
  {
    id: 6,
    title: "Sunset",
    artist: "THE KID LAROI",
    coverUrl:
      "https://s3-alpha-sig.figma.com/img/9ed5/920b/f952e6aa0091e87a8357debbc3ae9908?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZIhj5WFGbLFDBgTBzV8VUBEYMMhDb0-n5TVpKIpZ7JWFW3TOrqET5xtkUxi1nHvjgQTeH3lTM7d5Y-2XIskTLImVmWFeA0qTANY4Yu2q89lmd9Rh0C81394tEB~9epGXsR36OhQ6b-uDUCyv6iNddtwN6OxQjo8B8Glwb4R4meNrjxAZy-h1yGF5iUg3aMgphYGHodxPtNUSYYL3shxTpm9uQyW01LhkbTr~o3CGJYzlwnrFzsI2F4~ccmJA1-R51QYTgvC~RLd5jGMPJzZoCXzOlCYRGTzdNFLvDqIV1YriAMRVWtSm2bYIOZCddKVXuMFBT8dparD6uIaGSFt7g__",
  },
];
