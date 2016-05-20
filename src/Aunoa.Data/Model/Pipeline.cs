using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aunoa.Data.Model
{
    public class Pipeline : MongoObject
    {
        public string Name { get; set; }
        public string Description { get; set; }


    }

    public class Job : MongoObject
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
