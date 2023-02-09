#%%
from transformers import AutoTokenizer
from datasets import load_dataset
import pandas as pd
raw_datasets = load_dataset("glue","mrpc")
df = pd.DataFrame([{"title":"Representación","text":"Uninominal"},{"title":"Representación Proporcional","text":"Ideológica"}])
df.to_json("politics-es.jsonl",lines=True)
politics_datasets = load_dataset("json",data_files="politics-es.jsonl")
checkpoint = "bert-base-cased"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

lambda tokenize_f:tokenizer(example["sentence_1"],example["sentence_2"],padding="max_length",truncation=True,max_length=128)

tokenized_datasets = raw_datasets.map(tokenize_f,batched=True)
tokenized_datasets = tokenized_datasets.remove_columns(["idx","",""])
tokenized_datasets = tokenized_datasets.remove_column("label","labels")
tokenized_datasets = tokenized_datasets.with_format("torch")
