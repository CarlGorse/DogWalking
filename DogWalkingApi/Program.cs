using DogWalkingApi.DbContext;
using DogWalkingApi.Repositories;
using DogWalkingApi.Services;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IDogWalkingDbContext, DogWalkingDbContext>();
builder.Services.AddScoped<ITimeslotRepository, TimeslotRepository>();
builder.Services.AddScoped<ITimeslotService, TimeslotService>();

builder.Services.AddMvc().AddNewtonsoftJson(options => {
    options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});

var configuration = new ConfigurationBuilder()
    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
    .AddJsonFile("appSettings.json")
    .Build();

builder.Services.AddDbContext<DogWalkingDbContext>(options =>
    options.UseInMemoryDatabase("DogWalking"));

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
