using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project_DAL
{
    public class PatientOfDayDAL
    {       
        DataBaseDataContext db;
        public PatientOfDayDAL()
        {
            db = new DataBaseDataContext();
        }
        public List<PartientOfDay> getAllPartientOfDay()
        {
            return db.PartientOfDays.ToList();
        }
        public PartientOfDay getOnePartientOfDay(int Id)
        {
            return db.PartientOfDays.Where(x => x.PartientID == Id).FirstOrDefault();
        }
        public void insertPartientOfDay(PartientOfDay PartientOfDay)
        {
            db.PartientOfDays.InsertOnSubmit(PartientOfDay);
            db.SubmitChanges();
        }
        public void updatePartientOfDay(PartientOfDay PartientOfDay)
        {
            var record = db.PartientOfDays.Where(x => x.PartientID == PartientOfDay.PartientID).FirstOrDefault();
            record.Number = PartientOfDay.Number;
            record.RoomID=PartientOfDay.RoomID;
            db.SubmitChanges();
        }
    }
}
