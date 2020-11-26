from django.contrib import admin
from .models import WorldTotal, World, DomesticTotal, Domestic, WorldName, DomesticName
# Register your models here.


class NameAdmin(admin.ModelAdmin):
    '''네임관리'''
    list_per_page = 15
    list_display = ['id', 'enname', 'krname', 'cnname']
    search_fields = ['enname', 'krname', 'cnname']


class TotalAdmin(admin.ModelAdmin):
    '''데이터관리'''
    list_per_page = 15
    list_display = ['id', 'cumulative', 'cure', 'death', 'create_time']
    search_fields = ['create_time']


admin.site.register(WorldTotal, TotalAdmin)
admin.site.register(World, TotalAdmin)
admin.site.register(DomesticTotal, TotalAdmin)
admin.site.register(Domestic, TotalAdmin)
admin.site.register(WorldName, NameAdmin)
admin.site.register(DomesticName, NameAdmin)