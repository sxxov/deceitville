import clock_glass_bin from './clock-glass.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
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
			"name": "clock, glass"
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "clock, glass",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.011811017990112305
			}
		}
	],
	"meshes": [
		{
			"name": "Circle.001",
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
			"count": 192,
			"max": [
				1,
				0.06542237102985382,
				1
			],
			"min": [
				-1,
				0.023804590106010437,
				-1
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 192,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 192,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 372,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1009,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1012,
			"uri": clock_glass_bin
		}
	]
}