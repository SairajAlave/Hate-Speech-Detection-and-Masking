import re
from bs4 import BeautifulSoup # type: ignore

def replace_words_with_color(html, words, color):
    soup = BeautifulSoup(html, "html.parser")

    for word in words:
        re_pattern = re.compile(re.escape(word), re.IGNORECASE)
        replace_with = f'<span style="color: {color};">{word}</span>'
        soup.body.decodeContents().replace(re_pattern, replace_with)

    return str(soup)

def restore_inputs(html, old_text, new_text):
    soup = BeautifulSoup(html, "html.parser")

    inputs = soup.find_all("input")
    for input_elem in inputs:
        old_value = input_elem.get("value", "")
        new_value = old_value.replace(old_text, new_text)
        input_elem["value"] = new_value

    return str(soup)

# Example usage
html = """
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log">
    <time>12:34:56</time>: <message>Initial content</message>
  </div>
</div>
"""

black = ['freak', 'in shit', 'special', 'highlight']  # harassment/bullying
red = ['nigga', 'javascript']  # racism
purple = ['batsman']  # sexism
yellow = ['bhangi', 'dhobi']  # casteism
pink = ['pansy', 'queer', 'gay', 'lesbian']  # sexual-orientation
blue = ['crippled']  # disability

black_color = "#000000"
purple_color = "#A020F0"
red_color = "#FF0000"
yellow_color = "#FFFF00"
pink_color = "#FFC0CB"
blue_color = "#0000FF"

html = replace_words_with_color(html, red, red_color)
html = replace_words_with_color(html, black, black_color)
html = replace_words_with_color(html, purple, purple_color)
html = replace_words_with_color(html, yellow, yellow_color)
html = replace_words_with_color(html, pink, pink_color)
html = replace_words_with_color(html, blue, blue_color)

html = restore_inputs(html, f'<span style="color:{red_color};"><span style="background-color:{red_color};">nigga</span></span>', 'nigga')
html = restore_inputs(html, f'<span style="color:{red_color};"><span style="background-color:{red_color};">javascript</span></span>', 'javascript')

print(html)