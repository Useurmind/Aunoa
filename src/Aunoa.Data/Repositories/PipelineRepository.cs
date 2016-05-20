using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Aunoa.Data.Model;

using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace Aunoa.Data.Repositories
{
    public class PipelineRepository : IPipelineRepository
    {
        private const string PipelineCollectionName = "Pipelines";

        private IMongoDatabase database;

        private IMongoCollection<Pipeline> pipelineCollection;

        public PipelineRepository(IMongoDatabase database)
        {
            this.database = database;

            this.pipelineCollection = this.database.GetCollection<Pipeline>("PipelineCollectionName");
        }

        public async Task<Pipeline> GetPipeline(string id)
        {
            var resultCursor = await pipelineCollection.FindAsync(x => x.Id == id);

            return resultCursor.Current.First();
        }

        public Task CreatePipeline(Pipeline pipeline)
        {
            return pipelineCollection.InsertOneAsync(pipeline);
        }

        public async Task UpdatePipeline(Pipeline pipeline)
        {
            var filter = Builders<Pipeline>.Filter.Eq(p => p.Id, pipeline.Id);
            var updateResult = await pipelineCollection.ReplaceOneAsync(filter, pipeline);
        }
    }

    public interface IPipelineRepository
    {
        Task<Pipeline> GetPipeline(string id);

        Task CreatePipeline(Pipeline pipeline);

        Task UpdatePipeline(Pipeline pipeline);
    }
}
