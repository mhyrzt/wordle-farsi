import csv
import json

words = {"words": []}
with open("./words.csv") as f:
    for row in csv.reader(f):
        w = row[0].strip()
        if len(w) == 5:
            words["words"].append(w)

with open("words.json", "w", encoding="utf-8") as f:
    json.dump(words, f, ensure_ascii=False, indent=4)
