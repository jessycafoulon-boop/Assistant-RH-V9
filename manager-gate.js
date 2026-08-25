/* =========================================================
   ESPACE MANAGERS — LIRE AVANT DE MODIFIER
   ---------------------------------------------------------
   Cette page (managers.html) est un fichier statique hébergé
   sur un dépôt GitHub PUBLIC. Le HTML et le JS de ce site sont
   entièrement téléchargés par le navigateur, y compris par
   quelqu'un qui n'a pas le code — c'est pour ça que les
   ressources managers (MANAGER_RESOURCES_CIPHERTEXT ci-dessous)
   sont chiffrées : sans le bon code, ce n'est qu'une suite de
   caractères illisible, et ni le titre, ni la description, ni
   le lien de chaque ressource n'apparaissent en clair dans le
   code source tant que le bon code n'a pas été saisi.

   ⚠️ Ce chiffrement protège contre la consultation occasionnelle
   du code source, mais un code à 4 chiffres ne représente que
   10 000 combinaisons : quelqu'un de déterminé pourrait écrire
   un script qui les essaie toutes hors ligne pour déchiffrer le
   contenu. Ce n'est donc toujours pas un vrai coffre-fort.

   Règles à respecter :
   1. Ne mettez jamais ici de contenu réellement confidentiel
      (données personnelles, informations disciplinaires, etc.),
      même chiffré.
   2. Pour du contenu vraiment confidentiel : ne l'intégrez pas
      dans cette page. Utilisez un lien vers un espace DÉJÀ
      protégé par une authentification réelle (dossier Drive ou
      SharePoint restreint à un groupe, intranet avec
      identifiants nominatifs...). C'est ce système externe qui
      doit assurer la sécurité, pas cette page statique.
   3. Le code "4827" utilisé jusqu'ici est déjà visible dans
      l'historique Git de ce dépôt public. Si des managers
      l'utilisaient réellement, changez-le (voir plus bas).

   ---------------------------------------------------------
   COMMENT MODIFIER LES RESSOURCES OU LE CODE

   Comme les ressources sont chiffrées, vous ne pouvez plus les
   éditer directement dans le HTML : il faut régénérer le bloc
   chiffré. Ouvrez la console du navigateur sur managers.html
   (ou n'importe quelle page qui charge ce script) et exécutez :

     await encryptResources("VOTRE_CODE_A_4_CHIFFRES", [
       // Ressource de type "lien" (vers un espace déjà sécurisé) :
       {
         icon: "📋",
         title: "Titre de la ressource",
         description: "Description courte.",
         url: "https://lien-vers-une-ressource-deja-securisee.fr",
         linkLabel: "Ouvrir"
       },
       // Ressource de type "faq" (accordéon affiché directement) :
       {
         type: "faq",
         icon: "💶",
         title: "Titre du guide",
         description: "Sous-titre du guide.",
         items: [
           { question: "1. Une question ?", answer: "<p>La réponse, en HTML.</p>" }
         ]
       }
       // ... autant de ressources que nécessaire
     ])

   La fonction affiche une longue chaîne de caractères : copiez-la
   intégralement dans MANAGER_RESOURCES_CIPHERTEXT ci-dessous, à la
   place de la valeur actuelle.
========================================================= */
const MANAGER_RESOURCES_CIPHERTEXT =
  "VPW9Scb7DceRu44Jk210hQu8SNmjllJCzOpmWXgKqNevTFs9xf1xgY1d50x0xsLmU3iDHshsnFAEbYLU8N7sL76NGt+D4Yp2IdTkLIUVZNi2T/8xfyZ2HMuuQQlyJJ8XLnLh1HOzLp3jLAIlqxxxPI8Kj1uhdlhxCtktDAHveOIecZ8dFkOoB3BQFL0aW7OEPJ51aFK/gUBBXd+xCh/sqoYELsqJ1q4tE/MfEApTEZp+9PbnXc2g1bYzvQn+KP539JwS7a3687Ka1QNBXIgPQJpkjpFgoMXIh05JBnlMcTQp3gwDDiZtwWn1Un9pbbDXypvhLFyz7oX0i4n4XuYogfoGXKcHosf0iuy3ipieEP33CcbyDatf2Nf+YihjkUPISx/ochi1Us9uAW4SV27cl23VErnzGYGrCjzXu9uY78iVUvc6SunAbijr8cV8qTTLCoRtY7HhD1vO2euMYRiZwUX+KpVocw6bOvAIg2CXi150h19qYHL7+zgVMJ/fLewOOlntnLsh4e+q15YEBgK0dKKbznhtbIIHiQ9VdSrPEMcJovudi/zte9q2z9BRbZqMa2ThGU5BSEpdTawb31cRoAh2jVEQn/gc7VmfbamBXSdEmMP3Ggw64aOMHj7dwTHGXwl6bC3RUsnmsgC3He5hrIExfVTpyLUcHfBjvaRCvJiWi9Q7AcxDwmAnt2Hv1yPuoht9/rN7YL8GSMYl0mEhfbvMunoQAygOn1ZozbYS6dxm178tDBEzTyRdQlJ+VYAmyvQfl8P5VIEr5zweOXqy1D39h4xejuk5WWwa+kizJKk3QgQBjrKfJD6XP4YlhChBIIY/FTCkNiitnGL/jcUx8xYPUhAql3ckd3GCYvprCDT9THG+jIZRfe0zL+DSz+iaLVhJfSD2LBvQTPtWiV9n3/H8rL2uvQL/lwqvI6yuDurbrQx6PMqs9imlahgBYoBl4wycQOyg5A960U9+ULZFUHeJaC+SBUZw2+BCDUpnwv70I5HS6VnXOC/fNhNDsdLasWYxF8WMMi2BP8p3fhIDomROiXig9cJWFGyGR3Sh6UXU50Nmv+H2KxFMGWf7SJlMPF/Stzc8HUsgMEzzskrTszzPVBaPpgCIctDbEviw84Xy0RC3VAqg/W5SQlrchKmLQd4pxY44CyFWIg4wQL9O5H2qal9rccS8PxFmth1urb1JtSm9VRyVBD4hKVkb2BUYFkjkeJCddNHdnqrqCRr4NqmtemLC0YKYnxD68+nBlMVVgKK8lGySGbDNBveOwIVOe+Punx47ALsvDuEhuoFl+cu9JFWbktTgX37iGkulkKtCS5UXkmevDmhTEwfgBR5XC80QRJYp2FCL2RRu5Md+ljQauxbCoJOU2QaxkOSRWShE0Lhvc0c2gF+c/KT2P2KxR+FBTEXJ024D9hsZou0DxADxLg8BUsrpPUIkQdzMKHUs/Il1/YaZVb/OpzzEMIQ+VLq0/2rGZmQCJCgHPc//txb6GYuZNC7w6KgKexjMmm6cgRlYWmgsvFTncNX31kwqSb3z46cUX49mnTMwvrl3qrfNlxlKHu0c97S3tTu/1/v9+xPdKxYSBIfR/OZCxmnykRFHknbv8H7F3vuGnofScIc/VV5IyQ6zEndLeE1GSSo0+kMAuFV5PGFD3fEVzNul33+yrvIdMTuh/OwTr+5ssSXQ5UMetffCG5/5dd2+U4FVL1ftqd3Qfx+dJWvFgCT+utQOPc1mos0HsZvIWKB0dHyLZa6v9O9BienrO4TVTmNYjGo4UTepNdwdUVcwZb+ihBdsrmOaJjpey4xj/eQVEcJ68twAJVQsaPzivJ3eSlMowcykzbWqNpDRfWBGYE7X1cnFrqWHCHamiGPQyPP2+eDea1SL5xAOxVJCjVRhPcw2o/xb1JlDA92K6Kd7wctgBfkaVf/XB5XeYMCl7VIKxrR/GXJMyiXPKXzlOLsCxlPkNSL++vfj9ZTNTqYBcRMzZ7WFpHXy0tQpwvweBJ4m6c/IAT2MnCn4i8SkvgPMo/xfTdZxnDr1UPEDCboAjeeU/35Zd9j7XiSo14qKfUc1/ps+Od7hgOeD0SSbwgGA4MAIf3VHVAmVP5L/lSp9/i7618/pot4M6QXoXpKgewBUOK7tJzQdeFhY/jtW9azNZ8AN7IVr8aHJMUGm6L1LcpCZEiZvqR8RFLWPe95BvgYdNpMHTguTDa1HCuXqD4L/STJ8Jed/xL0gKPjh+CDEy7YVoI0rnaDTkHL2LVWNqxMhhU/WPVei70UpvcM+QrodiSlG3uHJLD3s/p8Di3dgFlH3iFzu6fTL6dRyqnbIUPN3tyxeZ3k5npGnVc1lkY0+Il7gqfVJ0sMe8OdVwts3SP2eXvPiS9NR3Ha6VWP7Yfg6q1Rc3kORIxKGkPykRS4LNOKS2Nmm4iEjG5sV1EnpbJ7EkfRxbu5dnbUYVIAqMJaxCPxrNYXZ1sxj+u/RXMNFl2O4qaPdhl4EHsT38LSrzDO+Z4eGQ3I/Ay85TAWehJKBVVAc2UZn2NqNhSwN2GyMo71hkqVn6eYKXwzYLLHgennFzJl53W8kdgTg8IoRvgHjfFlNqH8XHZrnV6uPMIE1Vcgmx514LzzXld1qx9ELtn6tN7+Cb2ScMbz/YCeI8pWWPRxMwXw4u8q3kyUfHwa727Y2MiNATk/9BrXtvuafD11PdvlyshJC8IefIgtEhU4qAymqNS+3TOlmTNeEOeoYhred+pEe9kYIh95llPztTm36NHh22PibIb7XZKgIuPMIkdDTQpz7OY5xUoRwduesNbRLxOkXGTejFXhbQtfMZWje3xvpgLANH1gItP+BFB4KmyZPsrzVa8AXEanUSQhoWNbvbveupvFXtvRZAKph0G0DnAuU7IuZWB+ZHkdf0o7Jeu1MiwyH3+M/7IJ+D1jdEjoBjPitPkdNPaWKWN5aG3cyGE+nDppwpTItsvNXtjp1xsV7kqE0uM9Ivskko3yFuArYupjnXzHQRAFce4E0LMUTHvtwZ/+yZflMfS6mm/OI5fpyPBOrFk3AcgdwNmG+jgoiHKUdyfMHiXs90xZoutd7RoNft5CQOFlyz3qVSFmQQIpkQY2vBZbvLeMrz9ZMPaCbCk7jZMPHCEBoWvKLIBfs7VrbcvNSMbnUTXRPSXWKyG16D/cG6dvLGbFmuaz/vFZHYnZr5SvZ0jdxhl0njwbcZPDlR+K4Zr78ystEp/ix7WAi/d5FQes8VP3GeBc74MFzcptSBknJ0LStPduywtXZZyFq8Dc1pDskW8+Jb4EiQDYfBXkLaejj5YPdpCtmtyGRXlwWcsm0RQwRZlfYJ2YhK+S3CIjQeQcv58S/gcvOe4b0b1MPHYhEKjo8OA8AGyEf1c8KFUzxOsU4d6KCcJwJ85U47udpPIkdmNfrETyceFVVq09L0BXN5vkd79NjDu8Ajgn9lbAD5LzTIj+EVlNp3vL+n93B4LvZx/MN2J/nOlXQVztWGiIPi5qaC4nSmfjEHRxLBtTfrf/HaDZxZU1CS3AA3GknmHYhY35/PhLQt01y6CdkrG/UW98kU6YubzSyVCCdtBQBVqJD7HymdEthYrASHu5+JAZBE4M+KxKItKDsX8mQsjBSSzNqAksKeB715C0U/trzCBSsWMCC9yMJEPr3YxxTJr0G1DRSi7qX5f21GnNBaSxRBKVh8Hczfa/n7SeYniRDy+lIWNa+rrE0DOjWJ56OsCvGqdCDojLspsIFuUJPcOAYz4OUlN/4DXgYyLU71fme/nyybeIAYSY4NCXuVEoALqVIuNXBxbzJYDoZZvhG38PndAfJC9eqGr4/4GiDwuM7ib137HcOPDcD357ZItz3oCibBE7NKrKNA3uahYDQGXMcuYOVcJuB/jlUrzpi6Zmy+kWxkkKfG9Gux8INwkyMrxloIVNp6e/tHkacGN1Zwcq6TQwIv/iUq4y0BK/uvqWEeeNlDJR2nQ5hqZuvygwkx8pbdo8OASVKjaDDy8A8w1McUyT23xXOJpdicwjJO3nph5bIXfFm2au4LV+CU/UNeeNtTQZw2txpfep/fjovqfWqs6akMTkX6EQ2YpgBJpKpSxv1kOPW7XlFnB3hZs2o9qV3797/30ueDMiWL/995m0ZxbK2LMH+iS1JQQVibLCiniX3eaToXKToemJitW7DZZtg9I+T5KAlXy0JY067T/DPIWi4U97NgYR3SopwTv++UFJvLJ73rf/KfEheYKqxwR2dZ1YZ5DWJt33xZLKhzlso2tXhyS9cxIP7B8Paw5Z1c7gIvI18AnKks0VQY0MWdTJJ4kkdCi6tWDplnmq4A962lBQC9DCsEv9qyKuzMXt/FNU/uzgT16I3AREMb5udedwXHrpQRuek6QXVQjmYwhK3R1b9BsHN0NkiRheHZZhLLZOdJivLgXvkw96aiJ5K1Ff6XRiRpTtHMDPbwuGZ4/lRypLQ6W1+epQv4f+m3YqvDVmOx2LaK9VcX7Nh+y6Frqv37TNBRnwxGmxX3E2g6tVRGcadWZcXJM2+bLvhrBQLLr+2GioXzw00UmtvxZ4XbqFi72zwtekm3Z7hrczll28/M8IQoSDqtf12zBGGNb90WfFyK0+fj+Z2MGtOcnSkU3LjpuqoaP5h412OdkxznZpwrO0PaAootvTLcByS8nAyN9w/2B3xPHxbzWOca0QAa+W8b34/tAyIoI5+997nKuYsAApsJ0UwN+7Ykj5rWPCZdfZo9UFqn6g36TEbibRgdCxaMlNAiLtFydiSDKSuvpuPdOJjZhgZf2VCLgddTtqXfUzHSJb3l7Eo/NRQxZ+uZIMgwV8+XdmNrPVBhidiWOxRWH8E4F1q7EBMbhahn+O8IB9ZiF7mCVAk/2aQ3Vd/uNFr7AZyU9pmxgdSybHCcanvDvxntRS2NQ8Cy2/bFiSaWlb9+xXlP8U5VWXXoEIm97GuBvNkQAaZFVYDn8hlLhlcs1Bhr+JyY5wmSFQ2hBImg+wpEajcVQtSJufVqS0GEOaTgvUZwS2tRpE8JOchDB9USEwO/2S90tnmYt7LlZgocfCRSJWRxIUupY3NRr5pTuxZxPJk3QGpyghktunFutYOZi/WHszpHpOuDrI7qaf41R/MandlmXp8zmkFra5vFzr/5Asz7gVNgMdk2bQ670l3CSWXFfYtkHuAwF96JQ1WWyPOrVs+RuQifb4ASS3jGquUriUkWx1k9aCTh1t9Y7M+fc4uqWa4Oz3nLLdkEC0jKPJuiZfcCHo8SMx/4QFegJhl2UFHZYyUqODFKty5AaxGmNpA/MJRjEDeePi7IUaM9fWmQZAQObrj6hfpXGbazMSCxs9jeyjMrdJ64tk9XeWrL3RtItVU+YRPHxzzJsxBFuy/WZsmhxokT7hf/EyxrpHyXW+Xl3neBLBPWXJgaMhkObk/knqJ6SAjIl1Jhwu9pK/IL9wU498kTn8mrw2sVeP/kADd5qs/mGx/3Ck4IVD6EqcXYtQy3NjTx/NifxVHqtDn53WHfDcMEeOWfsjaQiRUF79yqNZ2dbA/hYP0K2CifiemCubEYZ5GtSM7z6Hev80E2PMXevaRqBn4UEk7A0Xb/FQdN7IxHotQyCSV6+7Bw4XvyLMV4NwIP6T1nJbo3OMxsAWx29Fp/r0WLpBZg9zM8DFyMl2be8nIMTs8mUUCrw3sHgNy2abwQhGdtfluLtbISe7Lu+kBaV7/KJ1Fj2FTqz1pTvbS0kPUwTlWMsIRwAFmuRzDggDZAjOZuWZKMXTkcaKLAo9rtLckDY3g3OUNCB/2V+TTYZNo2hBP+HUhQ2WCQR1EIR1p5pw1oKxmR17gmp/C8ut+Kxw3GTPqP3AkUnmgMdQkK50wDsb5KeC8BtUBXBnWKx4h41AdpNifwHhzqedAIZzaoSNC20R4msVw5cpTsC8ML9VqQ03ewmrycKG+zCWUn+lYYWrenAjclJEekTbjL5Ob7LLoUlPxCTzRZAWViCWbjoMM/n+NVAg52j4RgH3Cw6DErRA6NUBuK72G+bv3RArXhqWUtBtnL2nIq7y9vpfqoEFb6ZmQXvu1gtHD6+jPd3xXny+ypMBXNDbrdsMm/XYT5H7ViHOhUyisgGz/XRf8hOZBBc9h2yoWOIiWM6lG26z3EAmfilx5X12mR/bWJ4EA3jX394/aggarbd/XQNs4BwasU5m2qF7DAT6B+o7Cc5m5b2Aj1pAXRuAuVEYJ7b2e9/pIfp1myt99V0jeNB3V2eRMzLNzH/rtRgpig15UBt0ZJaOHF9me32CEIsUhgkOJpnl3DBYgOx/2FxudbW82Q6ehgnjOyjd9EgZnWON5I1TXp8q/DIWeLdtfDNBFfx/Mn34b4lwlRHHf20Rn0SsIUsTFHRmuBg8PBNlMwUtsKdsOa4GCcjYa/Ucb8TL7liNmjTVV/rxQmwjs75TEhJgS9INpuY19f35EGaVrXBm6wkMpkFDLtbnST4R7KxAlEk9WjETFUDQAvezI3oXCxIbaWnJHCMwMddR1S23kiuCHxxDyup/rVkvy1LTFZnDtDO4vaRa9D4x+EZrziDTHjkozwwqc3cer2/Mc2YLtqD18axb6QqU039iZlOY961nAnLX4W6tzyjL4NYoOA7MLQTR/hQC3fvbUu8xNVI2vrI/e6rSCRXnaI0Wuz/gZ52MQQiPd5zDjQ9IK/bZ8n8hn3saVnIpuwZg87YP+m8U/r1P2fVHx8wfOAuuGFGhK8t1xhjpjMMlAeZQiT5M+fgbG7Rz2jS0XWcGMiZIhBrY0IODsiy2zgqug6FguLuX8xmVhf2wDcPoAbFkaGCz1fL2xsg+4//egEw+lAyjtDLXT1oyTgL+P1+DP3gVvZiTeT+mc2p7+My1t4kjmByXBbppjT5d9dxMY7dU0FLXyZLXQhAFTIt7xubiVx3g2cNe7ljH+f/eKGYF2fP2xPHh3IyjL/X86X7aGAdtGi/+VDJiwSWxTLGCkfRb/4NkaY4mGhi9bDRlARLxWVPp8SWHK//g2RFyANgDRC9AG0blbCWtQGe9ykvu60ZpPijPVtHrMfArBkFS9fb49YClwKH0Wc27zl+pioTzoWcEcaXvix3YuF7t9Xz+x47Rs8qbtNgccyzMubq6i3bVKkxaGMafrBdbaammva6a+SVwbLxzizY4wMmFILv50KxyQzGXo4NjK0aRovX9EKK2gkZrccrswEC+TjrBWnhXLrxhCB4u/eiE9kg2g5r4xaC1SHxhCyRqcEhKvRQq8adgM2OFP9p2cvU40X2zWBJJvxcXe/qBrvQuGhdEEMaAx/3Sg5GfXzBSYDf0/vdq5fJIhjkQOwiAnx28niVSwYsQHCEtZkwSLFLRMf7xtdtxolfn4zM4M30FYm3qh7LVnW3Hsmew0ofXwdrbwK0unJOInaA3CaYgHT3WWqB/8kOID+2x0S7mpA/E2DBalwjiLt6qxGcxGm/m3zTbgFQJuqLvLpaanP9NcVDe3ifkTRQrOQWhSBGF8e5eeuFTUoISPmR35/dto3n/o88xqLeH4t7UivZQ3r+eEukjL82aFW9ZC7P98AboRZks9cXzPYocsSQVJzCAh0lesfeU2BDN+45NZn0Xg2isKI+WSJREZA0WNoTtm9G8N1wwbDlUiJS52vM7kHeGGQM1v+LYKh5CTGEswv8TM+1hPPl1yR+H0YSNcIntw2c661kjhgHEhwsvXAdWvyOD9pg/UW+bVuE5wckquo1tq9l5U1Z0/XKty2c4aTghSBPQMuQpq5JIuRDMCO9yixoMrfxZbqjz2KCX472ngM+T7jX4v3+8sLJty/Iej9qufzYY513y+V9tDF49oF1nCgT77vnobNJIW9rKi4nVC13AOlL+u4Z4P/vF4qPxmsAxWOxBTN29x56yDJSF5DZYPUEVqWBisFRUsTMRig2PjX7xlNfEf6Bb/wDQEhGX7kFGHkuV8etIgelnzxyHS2qHNL8PaV/bOcmzLs2Gw6f36RGo8E00K7rzDtAOONN/OA5tEIIO3F0pwtI6l+JfbCQnYeTw9udoTao98Zgim7msWD0xpBZbRG2wGrTYNb532+eTMtjyeFj1CNqJfnAlf/Jm6gNSObZCkz9ZG9UP4k8w81wJTPqTM7oBR0hlzB0olGD6DwdS2aL+4oiNIaZ60PYlUE/ih4RVb++EzwjgeNkZGxfl81akkH8nx0tAQhXxXgLLSkfIef6MdnJJ9c2WBtyKxWHl0lcXdN/2bqUDuTOVzPOR86wEuvQNSD5aolLCuYd+3gdPBR52nfJiuAJgZ/g+YTfJcH+7rVNipMchuBEid4dmhA65WTo6SHnoO3b9TX7GwzEYzvQC8WXzAsffe9e/V6dI93cnIDFBPLvuQuJEOReAvCaQ3cAYWfOq6wmi9NYF+oGolvklq5TYoy7/A5dNoCGNaRAFfxo9LIO2o7r0IrN5EgfAZJcPfw8Sjhmn1EphNaCtjCYamJFo24BdstZss1IhJfLS02ZBSnggTDtSHzxoY5ZliDpXi6lsR+AgzI/YPronr01YX8EN0pY1WOuQHAXnmVVtWg7sKzPrCN6rGaS5qml+FVQypB/BxIRl5o5MkemtQpcYHatHopvL3tfVkJAbvTja+xMTSqMnGmrnpYuKqdqDJFY84ShXyJQ1CXCFB+g7HZEJi3gCyt2uhJSfQE59g/sBP6DWTp9U6rsraaMr59L2P6k9V7a0YWE6PjQOXEXy9eimzcxsewJkfb8JdnBd4Wi+BBsSkxIGYkrCZt4FnALk5QZ5BXkij5MkYWMhOd8Gex1yIjf3iKP/WhytgKhFs++Oytp4j1t7eXwdthFtCcuFV5UApPUu7Fpqy2A6wiwlK0k56VV4zJz773vGiaI4GE5xG4ZfcYx2t0ThDPAKp2/q1A4T3tpaJK+xnkgadjc5mDwOUx3cMBNd4Ycx4HuiPqJJSiSdrah0ICtn9HHgm7SoolETliKl5fA84RID1FnFvodYtpYIpXSYZXJ10uMtEIdG1N5eiU8GETSmQuT4VaIDaL6V4g2QNGit7HCB8u5qVhpEMj7it1oFwTgWu6rWy8M5lGu8z/yPsHJTjSHMAKnuOkh6JTufVukCoCRkCU/5Um4uQCJEu/cS1KDlBkv9GF6v+0SWnErEI+n3OP43JH0HPAWYOOlvcwfoxKO7W8V2NRjxngN5daPV/BZXS2Rv37fl2Rf/tUi6eann0c4cNUfkzHlaA4568tYrUeA15ciT1H8S5T5fwwFw81wVMtgKyfiLgSK2oaqVHOYw8ax9CTfdzy0Qj3t2X/zX44Xge6cORN6J34uNe6ycNyMCXyNf2hrmfhJGpdcycVRT2/AZo8p2pHE7s6vQEvnQ5ViVWAAa5w49+POwUUOKUI3AuDzHIFpaqVVQb0bBpUzwC7j1p/xQvcotq4ykXasDedfy1k85prvaqQicVNw4OXvnlNchyUClYgY2uZrskwbRgkpyexJNUSFtyjnp7UwEnHr9nq2OgDnF0R3xg0lknGBgRh+A49YklVcrEBXXbqlxhfpkvSJo3meHH+Q+Puj6W3K+PtDNDEdj80nyIh5MxbCnukJqB3HrdnDSmJVVFdcEE+B9zTQb4tHZcGRdbBoBqBPfHfBy8q5PPiBj/cSxnyIihgtZfkmaDQ6VZztwWSlMYUpXWWYI0b2WCs8WDtqcW/xcMIRVWCHJCdi+Eo/00svxoZMc56gkX3Q8qnJJIae0a615JY6Qf/3TtkunlAd64nh7q+rHTxDSejNQF3u65LirKbvC7kCqg+G6j5R3n+hYVzKNUJwUWrQQMKCmDL3IGtY6GzbHD5GwNK/SND0g2e/14UNzKxnESNYHrRGlZqZgHmWA3ARcQxmbFGgxcF3HDDW2Q388r1aptjWaV+M3IlcSfugrBasUsIMvmuE3ZlBTzYPDBx6JvjuxOKqVAMr5tCCKUNIHZknpLkdP3EdquLlBhV+4KgMu/Duu1uC5jChji/cC0ojNOKE8OISMFJzS4qZPmzkE+sqxN5b2BfNPZ3c+eXvK2ZVBdbKHFecBxfhQ0Wic2BKgoy6adws4zhMmCqmCRm5UTm3OSf9uiKlGH1aQ1iNWENWSN8rgTKRlsKsoZFeeh2EuH3nlAd01Gd/eHfzvJEWVYkqh8XEYPWFQM4ZZ52dmtpz4GFbDjLNV0SDi6mHQH10a/tFA5NQzCzWLwTEbUtYkbZqf6cKbd8IhJY2rkhRCVc4+HVeCnO8p8EdmQU54YmWNjGOVbmSMxufvMqlRJsxC6sPVtebpfk/VPVgBKLnhjElUdgT652M5di4Jt5nmaYRK5pDyKjbVPqmvjRRP79Nmq10ai3m88Y8xD7zdrdZQNfNtSp9we+NhBuPKmz0TnorKqzWq8ECdyMe8RWArEh2XMcKrT0nGoJ3qZ80QO9WLKMxe1zndgTcMJ6q5sDMuWk0Lxt2bGlYptdIhkCB6qF+JQ2y0Sgo2y3GyVnrKjOGh3/qKWdyaHt9pTn888QL/wEoOac1K4FOluS9RtBF7obmQJhZvlnbkor57MMrZBN7eYzhF99TQiWSJpK+r93Q6H60z2ROkIyjR0m3cKdA62dH1FnwG1xpqvhUn23uDkita2surWxb9BDuE/oASIO0y8WBv7udh4czN96P++F6ZnSRhRu2tPNP10PwP6JCLf+AP7mLipVeAn05C1K/UWGLJQ4CSO86fLPMkIKzbc3Zyh78Fz5v2cBUw7TC3NOrje7qC9pFOxLSjiv4YHYH/+m26HHB16W0tSDTL6EQuZK6FpdhhwgxxoevSFND4jIqmo5kpthlAYch1+JX1AKxmJzDBT/huCmX94aiM2Yw2iP0bLEKLobky0MjPwVKDuD6f4+32gpYov/OVJ6LtP3fC8HBEN+PzWQXa9Wwk9H3aMQczDj35REmp0UwwTwHYVCg572m/JMGzsadSsPajj+5MuKtvhSCM2HGHU6sF6QAyHdA3V0TVu0nFkI3DXrpCELE0t9iuNgJntqEruMJZML/OifNKz49MRSXrbrGoVx1G5PtOzqEPR6bUWs7kDCbTMjUKRyN9AyZaQe66AVc9Ca6+bbVmN4TTQ3f8ef+ZDzUMJNZPeHbBO+sIstOtLDe6aCr6rCZ7HHMAdyEj9HtqibN6CgOlDnMNczNbK46faKAGownRn/7ehDIXZe4lL5I8o15t5A7/6gDufPATjSLkVHKcB3kk+m+NAadhigzTCvDhVbX9PTT13dZrcEJ/WT/BF92xWp6zXNPK5arJGpNLQzjdz3VdVbXWN5Ln+sQ2LBTqHtG/EDf+PHHfA6Z32cCL3l9r+aQiQSrJP/UzieSEMv5xXoalML7chk43urSpEl/LC4vSAUhurEB6k9dZk3K/dWqABCkF5ziIWctr4DwN9xs/g1FRufRGnXMTbUYMu75qWJp6xaBj1TbU4twzJ0uOPzS7/CLzSCDUP06Afutc+LUDjVlt4o/CNvFErT35THeCLZhkJm3RYsmkhDmWX3uBu9dZL/kdINRiZ+Dlz7Osfr87Eq+DMXR8DRldYrQEe4IyzfscNzB0BSExS4Idl0hfJXO7ajAcBibk1gLCFhNlLKYL75vxv5P8bpucpypKXahXTHJl4JzKOrpmhe8866VxmB5euoV666GgcM+Zjy0yXHE4rGzeIkCqTaGFq9metarbYb9aK0ODHOd7deMLesZd4VldXoXpEYP9OiTkHWO+MZHZn0VBiiGoqGWdW7h7OlnDWPFeOrBbfBhLCeLYwnbUfUV/7cD3q5TQfePV2UxXXwiHjcSdiliezGqHl6fKSJ4jnZqC0fZ+bCGDDXHWxueY+nmNye6EYES58gZcUSoOKgn9/USqWMH/Cmhaa+c1lDaUOkAjoeRVYiBFbHK/UdyipOKbz3aNBpv3QI2O20RWK2rTazShCx/RJzYwwWhhWS/oMF7zaFeHRc781Rv4B0PLeWdB4/DnQ+e7dq8qgs+J0e2Cx5Y/sH1eOv5wF5rmYJTRLhOBG3ZXQi2bHYAor7J/KSux7/K0OtIFrioJB7tCde2/SQR4vxQfViU5DWhevJCdOttJBJnW1S0Xykcl8qj2eIHfNCYUMrgAq1tBZRv4uMKyBp5nttdUFZLSD7NqEfkKPFwqQ/wkaV/o6jtf4SR4vLDfAjYf5qdW9cU4rcxnq7NE1dWDaprk2eJIpxcFPfz8dsj5to1lxoErO/bscI0JGY/lbWajapv/qDbq6K58Ql3SYBMwTY1rOnQ0xSMsJVMyoV9QvbGysoEhnrZEDqIz5MnFokiRybBxt8uHPP1NuxNWpBdrQJPovWg0QPscfpCsKJzm8h3fDQ8Bq072mcAQk9xbyRmBjHvXWaNveuPlzdIWbC1yPAgYMDQiZzwazR3fx3hZ3SEba5dPmJeHCsk5ou/zcCT01Uq09YIKsXCORmnFpNHymyThlMl2w/1W4za3GqbzsqxHgJVjG2JFvboZs0AhpvMWtTmXB2pb2O5peii6ai4ds09YD9eGORYZBxABuDRrp05UPrutoispSf7qplurjTUB17nZALPwDyaEF0u27PlgXWfthpUcitOtsPCEbB9a1CRObqDKu9bxtvDbaS0sg3UUeG4NXpdx7vsQtu7NzLNk9DxeBrXG9K/mM/KYIuLBeJpqwpSCRgRO3JxGW19ihNITnJgVvIDxn8W9IqIoge5eksTpIE1jdKtf39avyg99JCImQPxidVYwbI20FBwdT9MqWocjn5WSkVYFGaeAB4UPxsnwpp+ojknaTnVogldTBb9YfE3rn5oVt8nZbip0wYtUQYjDKr8h3aKBIo65wGFYSCgupjqUMJXNAmqwpMnCktd7fJKJtVo8HGjdxO96sYa/HtsUuWQowT89CYRwy/6uB4GavLXnYIwHCeipzIFFRGdnklcTOGI1osi3UNSrwJpXSs49M4qItfZ6teASWh7DBqqubhjwyjuj9rtBuQvvqv+KkpByFjY2W4Eun/Lq5/ibshlRvk5Lm7IIGbKfzwDs9K6pZ5fAVM5x0b9ktfG8xvfPMCoNFExdLybsnYTpit2sd9CWulb4YuyKKzeA9qZuF3mxJ/PLMPUCeFuEd6aSTy1RKhwk3jXn4Ba+bujOidvtSgQCeadok+SxHAvJ7GUnkQNpz/PPI7oUYUPV6jL28bTSIO8sx0zVHjcyg+DGJjMdff5+qk07mMcxuZ0o17R74KxB+VZxnzUXjOXcXN7wZ2rYeFL3S+6qUBVZCBis5BW+4CvDw45e1l82aadBdS2GkpEaQmor+o1OYtX/DdnOd+N2bc7OjA324EivM8NDIeeUkHMmJPCzvxNeAPz52zgy7184AnpYLxlu3GziIgDJCeMmgUbUJtwhECBh0Z3X4ginutIk0rLkB5UbpMvVqFVBLsCF7cbFjAV5w7Q9BRIc45VyVEioah3ezKGAaUnygLD4UT96+ERjxe3scL5HqwbihX5PYOqw+eXu44WiwF6XhJa3OzWmTyylV9hX59oLX0m/OQsly2Oe+rFW3LKdspkJ3Qb2Il5CWXMePDpe+T6VJ+sMZzO8ni62qTZ/wEBhvbHJegKdS0e4afcarGYMX6gtkkUkt6U083Q/bkKQ1Pj06PcYLB0xOEUiOD5wZ4h2ZNsJzWZRDVzFA4UuenuwPPu30XIX2r8SY5yahVf9wUOdoXTizAoCY++IvsCQIrg3Iu0B7QlXgMSu5RO2oonkTr8O7eIB6BElsrXQ4Su0thtM6cVb4lfkVk9ugVeb/lcAHhmY5EDEBgX1o3rWRGFtWyAH5Et8csUtSV4XzLWNBHWJdU2zNtg2NtRLPto4ku0tdwYOsUTpqWazGe7dycUB7A9qVxBUXCn+1XNDeEuzEPQL4tUnUHdJmVccFTTcnmXMUvjPA6ZdQyDEMOAqWb2mNyKfPDBjwyVDy02lT50ZtMyP9cuHtWdCNM9x1x2HnTpdf9nVNnNS7ts/HuVxQwBNFK8Dox408BMWAtFkotrr88fx0ow3aBKoYfv5+YA8EeinYzrTDeo3xfLxVF7y3oaxtR5zRZbSGNJ9apaITYPM4iLNRclvNNclqucS2z27HD/Q6i1jTrwfOWafKnfKxH/rsDX4enz8hJ8A5pKGJteWc3tYZTOQIs1j9zag3QbBroZ65FeroQiet48GYgbcvHz+9V8a8c3Fsop4rkJIVKWMO0Fdh6i4fp91yArhu35gNAitEMVHMjzIyOzW+XMV4M12WgsONrxnHfXydfeYqMCHxG0PXXTHtpe7kI1WTXje75YmrI2jReJNqc5t+WU2Al1WI8ukQkmwU5TYpTmv+dRo1//7gPkdVhaDTQks+AxmSvpEV68TDznoya7s+e55oXlaLf7p/DQj9lJDLkq/gOIkXB2MIe+qURLLc/uQRk1FNTBh0W1RW1wFqzmCQYpw2iuS2M1EHabwqt/2EDHcU/HJvFpZoHKBLrApu6jDTRJuhr4jWTU6oMvXYnWADLsOKTpYllrgr4QS2E+HM5CgqHNOqywYJQrpihkDl14+u6FeEDaiYUZRShzM/lxy1SSRd4bMUmMxMc2ZHQyqON4EGDjog1AmTiIuwPfcXWap9V2sPWhCrRgXwqtVNIriwSrA4xODYVlIB+NtbRRXrKTaaCN+hhRlCj2Spb4/L2gFex9n39xbwWcxYwAzyshXRydiTiTDwO9DW+b/yzJdeZ4n+pTxxI9L8h5RpDAhL3Cq4PAi2HNw7mWjZhBEj8yO6Ww21UlNsoL5+wZt2pFuVWcfG1LjVoqVlxMTuMFmvpgJXCJEQv2tT19JCPjPUc6bgxTauCu6sePlBsGgkla36o+ySIlmTJQenjoQSq5rRd3hzq1iW8u4FHDgJhT7CgTwAdJ0y0OWSL75evCp7JyP1BzKYZNpRH10osubrRdu2ADewLSqpyixkY3OGw6+zRYwSA0zcK0Br9TJ4bI06fTl1a4XdAVTSXQjL/iy/EW0Wea2Qy/lUzV/t7OzOcVDZCuJdKTs331zOZ3k1Ft7v3VQAjnFh2xhBYbLjfe75Y67JLuYb5pm9V6nEvsk0xi4l2s00R9xphzUYM39v0hkgW71mCjA6nrmxKR2ry9LoAPhNwNmOF0jdGjFZcYCr7xvn02+1IRLSjMdLMyqhk4omRUskZ5kvS0yGVFGA6SBC5XXviFZhUOvXz5YsREr3Tv0UcmxeSruYC7EA2/cFQIUwR6AT+ZpzHTB+QZLXk2wUVsh1ZG5QblXsrsqNJNxUwRMxSKqWEezHVTDb96TCG5u6kaIUeYKk0iwGaJk3x8u9fTz4mB3ew2f9BQZK8fNVZDU3/wo0KcRgkBiO8vjpEBvvaoCzlgEt8C6rL+4M/EwJ5pUYged6dHVUfVii7jImpdR/WT/oPayLeuGMSB0v76ysIUlim9iem3D6d+Ev+WOlTH+9VXGpEFc1Icrb/X/Vbrb0EKg3BGorPDFQ4F9ET50+nkg5IyNL6hDshJ8E506rqEm4Bk2rHWYJ0Y1ycHGMAO9RlGAvDdflLi3uX/M9Op6/dswtJZEYLMNMQkEIcxVAq0jgIgavOVEB0mXCZGJo8c4igeexusiloxivz7wiGNFCOEftpJ+oSCxJJd+mOa+iXpFG7R44w5q3RfxC+ZW48ioCVCa7B8e9M0uAt1phYIAeaWguuu7f9YZSVyGrwnaYSh7DeM1iiHvJSzEHjrTXYm/bvGmTnlGrJPwlqiCnzAE45RoOG2FOqe1Pv4lv24C7DsqTcJzFDevv0b9BGqw9ML7uX0UcpQlUrxT0hkXf75A5b/4C5Qg6sUFLWxsSh1Fc0PzaqSgAKBLuTyHd/noiJovn8a8e88VRabnuAoRdWcTAXbJiFOmT+tUTc9dOyKodsftB4nlxKiTo6vfq/yOyOMj9FfZozbka20abvdbDiThCjBw/ldb3GUwfEJfWTrOacGMrnbobkVbMIhpfCqZNU3vtXwzuh1ngRvGQReJOCgL2h4U8iyugHunB6xyQYTS+NTSjm+Fvi+GBnOoyF4TWooDq0y55VgfBjRM7sVSDVpWDAJ/sKbfiVbDZXEfZrcszmtHt9/lRBG1ymS4CKqb6HGstv5r0DEJkNzn0FW4iCew880qOWCbUnU6gDYnzC4akTQTiRTi79UNeu9QzmIkPpu164UiTWyS6RlgrnBMmB0i6wYIDGtZ4ObT5yKhTk9LhgJizG581JqsF2ZIkhaz/v4xVVqa09MBIH1hm7abappWex4lbqBUhhSY4t1tOYBY8+ry7Qmkh+c7NIrBS/bI5yVjovb+e1hglxp6Libf2rpSvJAADf/gRwpGHRVejH2vYDDztcMIh/jPSxP5aq9uYdfmFwcvNv8vsi76itse2gMeeVS7xfkWLrqwFJNbc7zlk33TVvM1bz4wzOZTrDWmbguBcYLkuMWzuS4kSG+CGnnya4j19+wNKXts+oGoUjcn0qT73diUHwYoTjyUKj6GDtEVvKe79PytBNriduBShUXVz77MJhSm37Up1MozSZ4j/Ap5ER1Xpd7KphAFKx9MFGYhC+OP7GQyG+k0wKpsZJ4Nm2mZf5BxpeiLGmV6meTz/adzHYgvGtanYGohtcyj3acH506WOxc1WbYzScH9buSwDB9RDqZLRHk4qLHWCAyJsHfkRlvNOwGc/hU6LauW5Jq7Yf/lRVq05S/Ik1oYH/67laQZd57i9004xwIqeZl2uUOL0vFT6ZO449ZjM3qWFKoSeVAkJamtOzKq8ilZsS4htKTNCjWhOgsgYIiYqXmhFtdiePpIRmXK9tfioOVCH49nUH4H+3/uUB3MPK0Xj9xk8LVbmXaxCZrWKbRwfmMGW1Rp9lhbjIm/68JqSHNVuq1lxnWl27QYmBTWGw4EU"; // ressources chiffrées avec le code "4827" — à régénérer, voir note ci-dessus

const MANAGER_MAX_ATTEMPTS = 5;
const MANAGER_LOCKOUT_MS = 60000;

let managerFailedAttempts = 0;
let managerLockedUntil = 0;

/* =========================================================
   OUTILS DE CHIFFREMENT (AES-256-GCM, clé dérivée du code)
========================================================= */

async function deriveKeyFromPin(pin){
  const bytes = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return crypto.subtle.importKey("raw", digest, "AES-GCM", false, ["encrypt", "decrypt"]);
}

function base64ToBytes(base64){
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

function bytesToBase64(bytes){
  let binary = "";
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}

// À exécuter dans la console pour régénérer MANAGER_RESOURCES_CIPHERTEXT
// (voir instructions dans le commentaire en haut de ce fichier).
async function encryptResources(pin, resourcesArray){
  const key = await deriveKeyFromPin(pin);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(resourcesArray));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);

  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);

  const result = bytesToBase64(combined);
  console.log(result);
  return result;
}

// Tente de déchiffrer les ressources avec le code saisi.
// Retourne le tableau de ressources si le code est correct,
// ou null si le code est incorrect (l'échec de déchiffrement
// EST la vérification du code : il n'y a pas de code stocké
// séparément à comparer).
async function decryptResources(pin){
  try{
    const key = await deriveKeyFromPin(pin);
    const combined = base64ToBytes(MANAGER_RESOURCES_CIPHERTEXT);
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);
    const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
    return JSON.parse(new TextDecoder().decode(plaintext));
  }catch(error){
    return null; // code incorrect, ou données corrompues
  }
}

/* =========================================================
   AFFICHAGE
========================================================= */

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function renderLinkResource(resource){
  return `
    <div class="manager-resource">
      <div class="manager-resource-info">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description)}
        </div>
      </div>
      <a class="manager-resource-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener">
        ${escapeHtml(resource.linkLabel || "Ouvrir")}
      </a>
    </div>
  `;
}

function renderFaqResource(resource){
  const items = (resource.items || []).map(item => `
    <details class="manager-faq-item">
      <summary>${escapeHtml(item.question)}</summary>
      <div class="manager-faq-answer">${item.answer}</div>
    </details>
  `).join("");

  return `
    <details class="manager-faq">
      <summary class="manager-faq-header">
        <div class="manager-resource-title">
          ${escapeHtml(resource.icon || "")} ${escapeHtml(resource.title)}
        </div>
        <div class="manager-resource-description">
          ${escapeHtml(resource.description)}
        </div>
      </summary>
      <div class="manager-faq-items">
        ${items}
      </div>
    </details>
  `;
}

function renderResources(resourcesArray){
  const container = document.getElementById("managerResources");
  if(!container) return;

  container.innerHTML = resourcesArray.map(resource =>
    resource.type === "faq" ? renderFaqResource(resource) : renderLinkResource(resource)
  ).join("");

  container.hidden = false;
}

/* =========================================================
   VERIFICATION DU CODE
========================================================= */

async function unlockManagerResources(){
  const input = document.getElementById("managerPin");
  const error = document.getElementById("managerPinError");
  const gate = document.getElementById("managerGate");
  const button = document.getElementById("managerPinSubmit");

  if(!input || !error || !gate) return;

  const now = Date.now();

  if(now < managerLockedUntil){
    const secondsLeft = Math.ceil((managerLockedUntil - now) / 1000);
    error.textContent = `Trop de tentatives. Réessayez dans ${secondsLeft}s.`;
    error.classList.add("active");
    return;
  }

  const pin = input.value.trim();

  if(!/^\d{4}$/.test(pin)){
    error.textContent = "Saisissez un code composé de 4 chiffres.";
    error.classList.add("active");
    return;
  }

  if(button) button.disabled = true;

  const resources = await decryptResources(pin);

  if(resources){
    managerFailedAttempts = 0;
    error.classList.remove("active");
    gate.hidden = true;
    renderResources(resources);
  }else{
    managerFailedAttempts += 1;

    if(managerFailedAttempts >= MANAGER_MAX_ATTEMPTS){
      managerLockedUntil = Date.now() + MANAGER_LOCKOUT_MS;
      managerFailedAttempts = 0;
      error.textContent = `Trop de tentatives. Réessayez dans ${Math.ceil(MANAGER_LOCKOUT_MS / 1000)}s.`;
    }else{
      error.textContent = "Code incorrect.";
    }

    error.classList.add("active");
    input.select();

    if(button) button.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("managerPin");
  if(!input) return;

  input.focus();

  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
    const error = document.getElementById("managerPinError");
    if(error) error.classList.remove("active");
  });

  input.addEventListener("keydown", event => {
    if(event.key === "Enter"){
      event.preventDefault();
      unlockManagerResources();
    }
  });

  document.getElementById("managerPinSubmit")
    ?.addEventListener("click", unlockManagerResources);
});
