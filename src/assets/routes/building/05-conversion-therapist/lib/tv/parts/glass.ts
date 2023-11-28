import glass_bin from './glass.bin?url';

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
			"name": "glass"
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
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "glass",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.800000011920929,
					0.800000011920929,
					0.800000011920929,
					1
				],
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "glass",
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
			"count": 37,
			"max": [
				0.21645408868789673,
				0.24008113145828247,
				0.3656441569328308
			],
			"min": [
				-0.41578322649002075,
				-0.20729108154773712,
				0.3427261710166931
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 37,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 37,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 99,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 486,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 488,
			"uri": glass_bin
		}
	]
}