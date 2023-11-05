import cat_glass_bin from './cat.glass.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "cat.glass",
			"translation": [
				-4,
				0.24998164176940918,
				0
			]
		}
	],
	"materials": [
		{
			"alphaMode": "BLEND",
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						1,
						1,
						1
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "Sphere.002",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 1169,
			"max": [
				0.9999998807907104,
				2.5000159740448,
				0.9999997615814209
			],
			"min": [
				-0.9999997019767761,
				0.000015974044799804688,
				-1
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1169,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1169,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 6522,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 6234,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 6236,
			"uri": cat_glass_bin
		}
	]
}