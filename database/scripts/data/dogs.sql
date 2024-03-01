delete Dogs

insert Dogs([Name], BreedId, [Size], OffLeadLevel)
select 'Alfie', (select BreedId from Breeds where [Name] = 'Cockapoo'), 3, 3
union select 'River', (select BreedId from Breeds where [Name] = 'King Charles'), 2, 1